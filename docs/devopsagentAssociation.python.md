# `devopsagentAssociation` Submodule <a name="`devopsagentAssociation` Submodule" id="@cdktn/provider-awscc.devopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssociation <a name="DevopsagentAssociation" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_space_id: str,
  configuration: DevopsagentAssociationConfiguration,
  service_id: str,
  linked_association_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.agentSpaceId">agent_space_id</a></code> | <code>str</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.linkedAssociationIds">linked_association_ids</a></code> | <code>typing.List[str]</code> | Set of linked association IDs for parent-child relationships. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.agentSpaceId"></a>

- *Type:* str

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.serviceId"></a>

- *Type:* str

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `linked_association_ids`<sup>Optional</sup> <a name="linked_association_ids" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.linkedAssociationIds"></a>

- *Type:* typing.List[str]

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds">reset_linked_association_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration"></a>

```python
def put_configuration(
  aws: DevopsagentAssociationConfigurationAws = None,
  azure: DevopsagentAssociationConfigurationAzure = None,
  dynatrace: DevopsagentAssociationConfigurationDynatrace = None,
  event_channel: DevopsagentAssociationConfigurationEventChannel = None,
  git_hub: DevopsagentAssociationConfigurationGitHub = None,
  git_lab: DevopsagentAssociationConfigurationGitLab = None,
  mcp_server: DevopsagentAssociationConfigurationMcpServer = None,
  mcp_server_datadog: DevopsagentAssociationConfigurationMcpServerDatadog = None,
  mcp_server_grafana: DevopsagentAssociationConfigurationMcpServerGrafana = None,
  mcp_server_new_relic: DevopsagentAssociationConfigurationMcpServerNewRelic = None,
  mcp_server_sig_v4: DevopsagentAssociationConfigurationMcpServerSigV4 = None,
  mcp_server_splunk: DevopsagentAssociationConfigurationMcpServerSplunk = None,
  pager_duty: DevopsagentAssociationConfigurationPagerDuty = None,
  service_now: DevopsagentAssociationConfigurationServiceNow = None,
  slack: DevopsagentAssociationConfigurationSlack = None,
  source_aws: DevopsagentAssociationConfigurationSourceAws = None
) -> None
```

###### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.aws"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

###### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.azure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

###### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.dynatrace"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

###### `event_channel`<sup>Optional</sup> <a name="event_channel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.eventChannel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

###### `git_hub`<sup>Optional</sup> <a name="git_hub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.gitHub"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

###### `git_lab`<sup>Optional</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.gitLab"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

###### `mcp_server`<sup>Optional</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

###### `mcp_server_datadog`<sup>Optional</sup> <a name="mcp_server_datadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServerDatadog"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

###### `mcp_server_grafana`<sup>Optional</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServerGrafana"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

###### `mcp_server_new_relic`<sup>Optional</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServerNewRelic"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

###### `mcp_server_sig_v4`<sup>Optional</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServerSigV4"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

###### `mcp_server_splunk`<sup>Optional</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.mcpServerSplunk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

###### `pager_duty`<sup>Optional</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.pagerDuty"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

###### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.serviceNow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

###### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.slack"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

###### `source_aws`<sup>Optional</sup> <a name="source_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.sourceAws"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

##### `reset_linked_association_ids` <a name="reset_linked_association_ids" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds"></a>

```python
def reset_linked_association_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsagentAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput">agent_space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput">linked_association_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds">linked_association_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration"></a>

```python
configuration: DevopsagentAssociationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `agent_space_id_input`<sup>Optional</sup> <a name="agent_space_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput"></a>

```python
agent_space_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput"></a>

```python
configuration_input: IResolvable | DevopsagentAssociationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `linked_association_ids_input`<sup>Optional</sup> <a name="linked_association_ids_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput"></a>

```python
linked_association_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

---

##### `linked_association_ids`<sup>Required</sup> <a name="linked_association_ids" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds"></a>

```python
linked_association_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssociationConfig <a name="DevopsagentAssociationConfig" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_space_id: str,
  configuration: DevopsagentAssociationConfiguration,
  service_id: str,
  linked_association_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId">agent_space_id</a></code> | <code>str</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId">service_id</a></code> | <code>str</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds">linked_association_ids</a></code> | <code>typing.List[str]</code> | Set of linked association IDs for parent-child relationships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_space_id`<sup>Required</sup> <a name="agent_space_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId"></a>

```python
agent_space_id: str
```

- *Type:* str

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration"></a>

```python
configuration: DevopsagentAssociationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `linked_association_ids`<sup>Optional</sup> <a name="linked_association_ids" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds"></a>

```python
linked_association_ids: typing.List[str]
```

- *Type:* typing.List[str]

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

### DevopsagentAssociationConfiguration <a name="DevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfiguration(
  aws: DevopsagentAssociationConfigurationAws = None,
  azure: DevopsagentAssociationConfigurationAzure = None,
  dynatrace: DevopsagentAssociationConfigurationDynatrace = None,
  event_channel: DevopsagentAssociationConfigurationEventChannel = None,
  git_hub: DevopsagentAssociationConfigurationGitHub = None,
  git_lab: DevopsagentAssociationConfigurationGitLab = None,
  mcp_server: DevopsagentAssociationConfigurationMcpServer = None,
  mcp_server_datadog: DevopsagentAssociationConfigurationMcpServerDatadog = None,
  mcp_server_grafana: DevopsagentAssociationConfigurationMcpServerGrafana = None,
  mcp_server_new_relic: DevopsagentAssociationConfigurationMcpServerNewRelic = None,
  mcp_server_sig_v4: DevopsagentAssociationConfigurationMcpServerSigV4 = None,
  mcp_server_splunk: DevopsagentAssociationConfigurationMcpServerSplunk = None,
  pager_duty: DevopsagentAssociationConfigurationPagerDuty = None,
  service_now: DevopsagentAssociationConfigurationServiceNow = None,
  slack: DevopsagentAssociationConfigurationSlack = None,
  source_aws: DevopsagentAssociationConfigurationSourceAws = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | AWS association for 'monitor' account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | Azure subscription integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | Dynatrace monitoring configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel">event_channel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | EventChannelconfiguration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub">git_hub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | GitHub repository integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | GitLab project integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog">mcp_server_datadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | Datadog MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | NewRelic MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | PagerDuty integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | ServiceNow integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | Slack workspace integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws">source_aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | AWS association for 'source' account. |

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws"></a>

```python
aws: DevopsagentAssociationConfigurationAws
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure"></a>

```python
azure: DevopsagentAssociationConfigurationAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace"></a>

```python
dynatrace: DevopsagentAssociationConfigurationDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

##### `event_channel`<sup>Optional</sup> <a name="event_channel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel"></a>

```python
event_channel: DevopsagentAssociationConfigurationEventChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

##### `git_hub`<sup>Optional</sup> <a name="git_hub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub"></a>

```python
git_hub: DevopsagentAssociationConfigurationGitHub
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

##### `git_lab`<sup>Optional</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab"></a>

```python
git_lab: DevopsagentAssociationConfigurationGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

##### `mcp_server`<sup>Optional</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer"></a>

```python
mcp_server: DevopsagentAssociationConfigurationMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

##### `mcp_server_datadog`<sup>Optional</sup> <a name="mcp_server_datadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog"></a>

```python
mcp_server_datadog: DevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

##### `mcp_server_grafana`<sup>Optional</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

##### `mcp_server_new_relic`<sup>Optional</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

##### `mcp_server_sig_v4`<sup>Optional</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

##### `mcp_server_splunk`<sup>Optional</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

##### `pager_duty`<sup>Optional</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty"></a>

```python
pager_duty: DevopsagentAssociationConfigurationPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow"></a>

```python
service_now: DevopsagentAssociationConfigurationServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack"></a>

```python
slack: DevopsagentAssociationConfigurationSlack
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

##### `source_aws`<sup>Optional</sup> <a name="source_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws"></a>

```python
source_aws: DevopsagentAssociationConfigurationSourceAws
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

### DevopsagentAssociationConfigurationAws <a name="DevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAws(
  account_id: str = None,
  account_type: str = None,
  assumable_role_arn: str = None,
  resources: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources] = None,
  tags: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId">account_id</a></code> | <code>str</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType">account_type</a></code> | <code>str</code> | Account Type 'monitor' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]</code> | List of AWS tags as key-value pairs. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `account_type`<sup>Optional</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumable_role_arn`<sup>Optional</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources"></a>

```python
resources: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags"></a>

```python
tags: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationAwsResources <a name="DevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources(
  resource_arn: str = None,
  resource_metadata: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType">resource_type</a></code> | <code>str</code> | Resource type. |

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resource_metadata`<sup>Optional</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationAwsTags <a name="DevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

### DevopsagentAssociationConfigurationAzure <a name="DevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAzure(
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Azure subscription ID corresponding to provided resources. |

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

### DevopsagentAssociationConfigurationDynatrace <a name="DevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace(
  enable_webhook_updates: bool | IResolvable = None,
  env_id: str = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId">env_id</a></code> | <code>str</code> | Dynatrace environment id. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources">resources</a></code> | <code>typing.List[str]</code> | List of Dynatrace resources to monitor. |

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `env_id`<sup>Optional</sup> <a name="env_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId"></a>

```python
env_id: str
```

- *Type:* str

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

### DevopsagentAssociationConfigurationEventChannel <a name="DevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel(
  enable_webhook_updates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

### DevopsagentAssociationConfigurationGitHub <a name="DevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationGitHub(
  owner: str = None,
  owner_type: str = None,
  repo_id: str = None,
  repo_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner">owner</a></code> | <code>str</code> | Repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType">owner_type</a></code> | <code>str</code> | Type of repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId">repo_id</a></code> | <code>str</code> | Associated Github repo ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName">repo_name</a></code> | <code>str</code> | Associated Github repo name. |

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner"></a>

```python
owner: str
```

- *Type:* str

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

##### `owner_type`<sup>Optional</sup> <a name="owner_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

##### `repo_id`<sup>Optional</sup> <a name="repo_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

##### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

### DevopsagentAssociationConfigurationGitLab <a name="DevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationGitLab(
  enable_webhook_updates: bool | IResolvable = None,
  instance_identifier: str = None,
  project_id: str = None,
  project_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier">instance_identifier</a></code> | <code>str</code> | GitLab instance identifier. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId">project_id</a></code> | <code>str</code> | GitLab numeric project ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath">project_path</a></code> | <code>str</code> | Full GitLab project path (e.g., namespace/project-name). |

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instance_identifier`<sup>Optional</sup> <a name="instance_identifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier"></a>

```python
instance_identifier: str
```

- *Type:* str

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

##### `project_path`<sup>Optional</sup> <a name="project_path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath"></a>

```python
project_path: str
```

- *Type:* str

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

### DevopsagentAssociationConfigurationMcpServer <a name="DevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None,
  tools: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description">description</a></code> | <code>str</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name">name</a></code> | <code>str</code> | The name of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools">tools</a></code> | <code>typing.List[str]</code> | List of MCP tools that can be used with the association. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerDatadog <a name="DevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description">description</a></code> | <code>str</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name">name</a></code> | <code>str</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationMcpServerGrafana <a name="DevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana(
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  tools: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools">tools</a></code> | <code>typing.List[str]</code> | List of tool categories to enable for the Grafana MCP server. |

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerNewRelic <a name="DevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic(
  account_id: str = None,
  endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId">account_id</a></code> | <code>str</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/). |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

### DevopsagentAssociationConfigurationMcpServerSigV4 <a name="DevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4(
  tools: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools">tools</a></code> | <code>typing.List[str]</code> | List of MCP tools available for the association. |

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerSplunk <a name="DevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description">description</a></code> | <code>str</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>str</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name">name</a></code> | <code>str</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationPagerDuty <a name="DevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty(
  customer_email: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  services: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail">customer_email</a></code> | <code>str</code> | Email to be used in PagerDuty API header. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services">services</a></code> | <code>typing.List[str]</code> | List of PagerDuty service IDs available for the association. |

---

##### `customer_email`<sup>Optional</sup> <a name="customer_email" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail"></a>

```python
customer_email: str
```

- *Type:* str

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

### DevopsagentAssociationConfigurationServiceNow <a name="DevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow(
  enable_webhook_updates: bool | IResolvable = None,
  instance_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId">instance_id</a></code> | <code>str</code> | ServiceNow instance ID. |

---

##### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

### DevopsagentAssociationConfigurationSlack <a name="DevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlack(
  transmission_target: DevopsagentAssociationConfigurationSlackTransmissionTarget = None,
  workspace_id: str = None,
  workspace_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget">transmission_target</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | Transmission targets for agent notifications. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId">workspace_id</a></code> | <code>str</code> | Associated Slack workspace ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName">workspace_name</a></code> | <code>str</code> | Associated Slack workspace name. |

---

##### `transmission_target`<sup>Optional</sup> <a name="transmission_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget"></a>

```python
transmission_target: DevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

##### `workspace_name`<sup>Optional</sup> <a name="workspace_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

### DevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget(
  incident_response_target: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget">incident_response_target</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | Destination for IncidentResponse agent. |

---

##### `incident_response_target`<sup>Optional</sup> <a name="incident_response_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget"></a>

```python
incident_response_target: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget(
  channel_id: str = None,
  channel_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId">channel_id</a></code> | <code>str</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName">channel_name</a></code> | <code>str</code> | Slack channel name. |

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

### DevopsagentAssociationConfigurationSourceAws <a name="DevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws(
  account_id: str = None,
  account_type: str = None,
  assumable_role_arn: str = None,
  resources: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources] = None,
  tags: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId">account_id</a></code> | <code>str</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType">account_type</a></code> | <code>str</code> | Account Type 'source' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]</code> | List of AWS tags as key-value pairs. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `account_type`<sup>Optional</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumable_role_arn`<sup>Optional</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources"></a>

```python
resources: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags"></a>

```python
tags: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationSourceAwsResources <a name="DevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources(
  resource_arn: str = None,
  resource_metadata: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType">resource_type</a></code> | <code>str</code> | Resource type. |

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resource_metadata`<sup>Optional</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationSourceAwsTags <a name="DevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssociationConfigurationAwsOutputReference <a name="DevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType">reset_account_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn">reset_assumable_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resources` <a name="put_resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources"></a>

```python
def put_resources(
  value: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_account_type` <a name="reset_account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType"></a>

```python
def reset_account_type() -> None
```

##### `reset_assumable_role_arn` <a name="reset_assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn"></a>

```python
def reset_assumable_role_arn() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput">account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput">assumable_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```python
resources: DevopsagentAssociationConfigurationAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```python
tags: DevopsagentAssociationConfigurationAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_type_input`<sup>Optional</sup> <a name="account_type_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput"></a>

```python
account_type_input: str
```

- *Type:* str

---

##### `assumable_role_arn_input`<sup>Optional</sup> <a name="assumable_role_arn_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput"></a>

```python
assumable_role_arn_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput"></a>

```python
resources_input: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `assumable_role_arn`<sup>Required</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---


### DevopsagentAssociationConfigurationAwsResourcesList <a name="DevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]

---


### DevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata">reset_resource_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_resource_metadata` <a name="reset_resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata"></a>

```python
def reset_resource_metadata() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput">resource_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_metadata_input`<sup>Optional</sup> <a name="resource_metadata_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```python
resource_metadata_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_metadata`<sup>Required</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationAwsResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>

---


### DevopsagentAssociationConfigurationAwsTagsList <a name="DevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]

---


### DevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationAwsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>

---


### DevopsagentAssociationConfigurationAzureOutputReference <a name="DevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---


### DevopsagentAssociationConfigurationDynatraceOutputReference <a name="DevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId">reset_env_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_env_id` <a name="reset_env_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId"></a>

```python
def reset_env_id() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput">env_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">env_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `env_id_input`<sup>Optional</sup> <a name="env_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput"></a>

```python
env_id_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `env_id`<sup>Required</sup> <a name="env_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```python
env_id: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationDynatrace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---


### DevopsagentAssociationConfigurationEventChannelOutputReference <a name="DevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationEventChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---


### DevopsagentAssociationConfigurationGitHubOutputReference <a name="DevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType">reset_owner_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId">reset_repo_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName">reset_repo_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_owner_type` <a name="reset_owner_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType"></a>

```python
def reset_owner_type() -> None
```

##### `reset_repo_id` <a name="reset_repo_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId"></a>

```python
def reset_repo_id() -> None
```

##### `reset_repo_name` <a name="reset_repo_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName"></a>

```python
def reset_repo_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput">owner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput">repo_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput">repo_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">repo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `owner_type_input`<sup>Optional</sup> <a name="owner_type_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput"></a>

```python
owner_type_input: str
```

- *Type:* str

---

##### `repo_id_input`<sup>Optional</sup> <a name="repo_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput"></a>

```python
repo_id_input: str
```

- *Type:* str

---

##### `repo_name_input`<sup>Optional</sup> <a name="repo_name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput"></a>

```python
repo_name_input: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `repo_name`<sup>Required</sup> <a name="repo_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```python
repo_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationGitHub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---


### DevopsagentAssociationConfigurationGitLabOutputReference <a name="DevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier">reset_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath">reset_project_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_instance_identifier` <a name="reset_instance_identifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier"></a>

```python
def reset_instance_identifier() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_project_path` <a name="reset_project_path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath"></a>

```python
def reset_project_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput">instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput">project_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">project_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_identifier_input`<sup>Optional</sup> <a name="instance_identifier_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput"></a>

```python
instance_identifier_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_path_input`<sup>Optional</sup> <a name="project_path_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput"></a>

```python
project_path_input: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_identifier`<sup>Required</sup> <a name="instance_identifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```python
instance_identifier: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_path`<sup>Required</sup> <a name="project_path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```python
project_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationGitLab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---


### DevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools">reset_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools"></a>

```python
def reset_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DevopsagentAssociationConfigurationMcpServerOutputReference <a name="DevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools">reset_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools"></a>

```python
def reset_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---


### DevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools">reset_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tools` <a name="reset_tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools"></a>

```python
def reset_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput">tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tools_input`<sup>Optional</sup> <a name="tools_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput"></a>

```python
tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```python
tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DevopsagentAssociationConfigurationOutputReference <a name="DevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace">put_dynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel">put_event_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub">put_git_hub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab">put_git_lab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer">put_mcp_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog">put_mcp_server_datadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana">put_mcp_server_grafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic">put_mcp_server_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4">put_mcp_server_sig_v4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk">put_mcp_server_splunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty">put_pager_duty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws">put_source_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace">reset_dynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel">reset_event_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub">reset_git_hub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab">reset_git_lab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer">reset_mcp_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog">reset_mcp_server_datadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana">reset_mcp_server_grafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic">reset_mcp_server_new_relic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4">reset_mcp_server_sig_v4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk">reset_mcp_server_splunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty">reset_pager_duty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack">reset_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws">reset_source_aws</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws` <a name="put_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws"></a>

```python
def put_aws(
  account_id: str = None,
  account_type: str = None,
  assumable_role_arn: str = None,
  resources: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsResources] = None,
  tags: IResolvable | typing.List[DevopsagentAssociationConfigurationAwsTags] = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.accountId"></a>

- *Type:* str

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

###### `account_type`<sup>Optional</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.accountType"></a>

- *Type:* str

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

###### `assumable_role_arn`<sup>Optional</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.assumableRoleArn"></a>

- *Type:* str

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.resources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

##### `put_azure` <a name="put_azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure"></a>

```python
def put_azure(
  subscription_id: str = None
) -> None
```

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure.parameter.subscriptionId"></a>

- *Type:* str

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

##### `put_dynatrace` <a name="put_dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace"></a>

```python
def put_dynatrace(
  enable_webhook_updates: bool | IResolvable = None,
  env_id: str = None,
  resources: typing.List[str] = None
) -> None
```

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `env_id`<sup>Optional</sup> <a name="env_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.envId"></a>

- *Type:* str

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.resources"></a>

- *Type:* typing.List[str]

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `put_event_channel` <a name="put_event_channel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel"></a>

```python
def put_event_channel(
  enable_webhook_updates: bool | IResolvable = None
) -> None
```

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `put_git_hub` <a name="put_git_hub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub"></a>

```python
def put_git_hub(
  owner: str = None,
  owner_type: str = None,
  repo_id: str = None,
  repo_name: str = None
) -> None
```

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.owner"></a>

- *Type:* str

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

###### `owner_type`<sup>Optional</sup> <a name="owner_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.ownerType"></a>

- *Type:* str

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

###### `repo_id`<sup>Optional</sup> <a name="repo_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.repoId"></a>

- *Type:* str

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

###### `repo_name`<sup>Optional</sup> <a name="repo_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.repoName"></a>

- *Type:* str

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

##### `put_git_lab` <a name="put_git_lab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab"></a>

```python
def put_git_lab(
  enable_webhook_updates: bool | IResolvable = None,
  instance_identifier: str = None,
  project_id: str = None,
  project_path: str = None
) -> None
```

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `instance_identifier`<sup>Optional</sup> <a name="instance_identifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.instanceIdentifier"></a>

- *Type:* str

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.projectId"></a>

- *Type:* str

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

###### `project_path`<sup>Optional</sup> <a name="project_path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.projectPath"></a>

- *Type:* str

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

##### `put_mcp_server` <a name="put_mcp_server" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer"></a>

```python
def put_mcp_server(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None,
  tools: typing.List[str] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.description"></a>

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.name"></a>

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

###### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.tools"></a>

- *Type:* typing.List[str]

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

##### `put_mcp_server_datadog` <a name="put_mcp_server_datadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog"></a>

```python
def put_mcp_server_datadog(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.description"></a>

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.name"></a>

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `put_mcp_server_grafana` <a name="put_mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana"></a>

```python
def put_mcp_server_grafana(
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  tools: typing.List[str] = None
) -> None
```

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

###### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.tools"></a>

- *Type:* typing.List[str]

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

##### `put_mcp_server_new_relic` <a name="put_mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic"></a>

```python
def put_mcp_server_new_relic(
  account_id: str = None,
  endpoint: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.accountId"></a>

- *Type:* str

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `put_mcp_server_sig_v4` <a name="put_mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4"></a>

```python
def put_mcp_server_sig_v4(
  tools: typing.List[str] = None
) -> None
```

###### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4.parameter.tools"></a>

- *Type:* typing.List[str]

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

##### `put_mcp_server_splunk` <a name="put_mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk"></a>

```python
def put_mcp_server_splunk(
  description: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  endpoint: str = None,
  name: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.description"></a>

- *Type:* str

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.endpoint"></a>

- *Type:* str

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.name"></a>

- *Type:* str

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `put_pager_duty` <a name="put_pager_duty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty"></a>

```python
def put_pager_duty(
  customer_email: str = None,
  enable_webhook_updates: bool | IResolvable = None,
  services: typing.List[str] = None
) -> None
```

###### `customer_email`<sup>Optional</sup> <a name="customer_email" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.customerEmail"></a>

- *Type:* str

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.services"></a>

- *Type:* typing.List[str]

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow"></a>

```python
def put_service_now(
  enable_webhook_updates: bool | IResolvable = None,
  instance_id: str = None
) -> None
```

###### `enable_webhook_updates`<sup>Optional</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.enableWebhookUpdates"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

###### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.instanceId"></a>

- *Type:* str

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack"></a>

```python
def put_slack(
  transmission_target: DevopsagentAssociationConfigurationSlackTransmissionTarget = None,
  workspace_id: str = None,
  workspace_name: str = None
) -> None
```

###### `transmission_target`<sup>Optional</sup> <a name="transmission_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.transmissionTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.workspaceId"></a>

- *Type:* str

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

###### `workspace_name`<sup>Optional</sup> <a name="workspace_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.workspaceName"></a>

- *Type:* str

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

##### `put_source_aws` <a name="put_source_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws"></a>

```python
def put_source_aws(
  account_id: str = None,
  account_type: str = None,
  assumable_role_arn: str = None,
  resources: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources] = None,
  tags: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags] = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.accountId"></a>

- *Type:* str

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

###### `account_type`<sup>Optional</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.accountType"></a>

- *Type:* str

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

###### `assumable_role_arn`<sup>Optional</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.assumableRoleArn"></a>

- *Type:* str

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.resources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

##### `reset_aws` <a name="reset_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_dynatrace` <a name="reset_dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace"></a>

```python
def reset_dynatrace() -> None
```

##### `reset_event_channel` <a name="reset_event_channel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel"></a>

```python
def reset_event_channel() -> None
```

##### `reset_git_hub` <a name="reset_git_hub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub"></a>

```python
def reset_git_hub() -> None
```

##### `reset_git_lab` <a name="reset_git_lab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab"></a>

```python
def reset_git_lab() -> None
```

##### `reset_mcp_server` <a name="reset_mcp_server" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer"></a>

```python
def reset_mcp_server() -> None
```

##### `reset_mcp_server_datadog` <a name="reset_mcp_server_datadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog"></a>

```python
def reset_mcp_server_datadog() -> None
```

##### `reset_mcp_server_grafana` <a name="reset_mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana"></a>

```python
def reset_mcp_server_grafana() -> None
```

##### `reset_mcp_server_new_relic` <a name="reset_mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic"></a>

```python
def reset_mcp_server_new_relic() -> None
```

##### `reset_mcp_server_sig_v4` <a name="reset_mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4"></a>

```python
def reset_mcp_server_sig_v4() -> None
```

##### `reset_mcp_server_splunk` <a name="reset_mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk"></a>

```python
def reset_mcp_server_splunk() -> None
```

##### `reset_pager_duty` <a name="reset_pager_duty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty"></a>

```python
def reset_pager_duty() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```

##### `reset_source_aws` <a name="reset_source_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws"></a>

```python
def reset_source_aws() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel">event_channel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub">git_hub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab">git_lab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer">mcp_server</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">mcp_server_datadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">mcp_server_grafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">mcp_server_new_relic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">mcp_server_sig_v4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">mcp_server_splunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty">pager_duty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws">source_aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput">aws_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput">azure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput">dynatrace_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput">event_channel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput">git_hub_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput">git_lab_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput">mcp_server_datadog_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput">mcp_server_grafana_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput">mcp_server_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput">mcp_server_new_relic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input">mcp_server_sig_v4_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput">mcp_server_splunk_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput">pager_duty_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput">source_aws_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```python
aws: DevopsagentAssociationConfigurationAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```python
azure: DevopsagentAssociationConfigurationAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```python
dynatrace: DevopsagentAssociationConfigurationDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `event_channel`<sup>Required</sup> <a name="event_channel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```python
event_channel: DevopsagentAssociationConfigurationEventChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `git_hub`<sup>Required</sup> <a name="git_hub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```python
git_hub: DevopsagentAssociationConfigurationGitHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `git_lab`<sup>Required</sup> <a name="git_lab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```python
git_lab: DevopsagentAssociationConfigurationGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `mcp_server`<sup>Required</sup> <a name="mcp_server" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```python
mcp_server: DevopsagentAssociationConfigurationMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `mcp_server_datadog`<sup>Required</sup> <a name="mcp_server_datadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```python
mcp_server_datadog: DevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `mcp_server_grafana`<sup>Required</sup> <a name="mcp_server_grafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```python
mcp_server_grafana: DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `mcp_server_new_relic`<sup>Required</sup> <a name="mcp_server_new_relic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```python
mcp_server_new_relic: DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `mcp_server_sig_v4`<sup>Required</sup> <a name="mcp_server_sig_v4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```python
mcp_server_sig_v4: DevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `mcp_server_splunk`<sup>Required</sup> <a name="mcp_server_splunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```python
mcp_server_splunk: DevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `pager_duty`<sup>Required</sup> <a name="pager_duty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```python
pager_duty: DevopsagentAssociationConfigurationPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```python
service_now: DevopsagentAssociationConfigurationServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```python
slack: DevopsagentAssociationConfigurationSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `source_aws`<sup>Required</sup> <a name="source_aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```python
source_aws: DevopsagentAssociationConfigurationSourceAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput"></a>

```python
aws_input: IResolvable | DevopsagentAssociationConfigurationAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput"></a>

```python
azure_input: IResolvable | DevopsagentAssociationConfigurationAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `dynatrace_input`<sup>Optional</sup> <a name="dynatrace_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput"></a>

```python
dynatrace_input: IResolvable | DevopsagentAssociationConfigurationDynatrace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `event_channel_input`<sup>Optional</sup> <a name="event_channel_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput"></a>

```python
event_channel_input: IResolvable | DevopsagentAssociationConfigurationEventChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `git_hub_input`<sup>Optional</sup> <a name="git_hub_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput"></a>

```python
git_hub_input: IResolvable | DevopsagentAssociationConfigurationGitHub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `git_lab_input`<sup>Optional</sup> <a name="git_lab_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput"></a>

```python
git_lab_input: IResolvable | DevopsagentAssociationConfigurationGitLab
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `mcp_server_datadog_input`<sup>Optional</sup> <a name="mcp_server_datadog_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput"></a>

```python
mcp_server_datadog_input: IResolvable | DevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `mcp_server_grafana_input`<sup>Optional</sup> <a name="mcp_server_grafana_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput"></a>

```python
mcp_server_grafana_input: IResolvable | DevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `mcp_server_input`<sup>Optional</sup> <a name="mcp_server_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput"></a>

```python
mcp_server_input: IResolvable | DevopsagentAssociationConfigurationMcpServer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `mcp_server_new_relic_input`<sup>Optional</sup> <a name="mcp_server_new_relic_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput"></a>

```python
mcp_server_new_relic_input: IResolvable | DevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `mcp_server_sig_v4_input`<sup>Optional</sup> <a name="mcp_server_sig_v4_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input"></a>

```python
mcp_server_sig_v4_input: IResolvable | DevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `mcp_server_splunk_input`<sup>Optional</sup> <a name="mcp_server_splunk_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput"></a>

```python
mcp_server_splunk_input: IResolvable | DevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `pager_duty_input`<sup>Optional</sup> <a name="pager_duty_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput"></a>

```python
pager_duty_input: IResolvable | DevopsagentAssociationConfigurationPagerDuty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | DevopsagentAssociationConfigurationServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput"></a>

```python
slack_input: IResolvable | DevopsagentAssociationConfigurationSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `source_aws_input`<sup>Optional</sup> <a name="source_aws_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput"></a>

```python
source_aws_input: IResolvable | DevopsagentAssociationConfigurationSourceAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---


### DevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail">reset_customer_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices">reset_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_email` <a name="reset_customer_email" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail"></a>

```python
def reset_customer_email() -> None
```

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices"></a>

```python
def reset_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput">customer_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">customer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_email_input`<sup>Optional</sup> <a name="customer_email_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput"></a>

```python
customer_email_input: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_email`<sup>Required</sup> <a name="customer_email" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```python
customer_email: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationPagerDuty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---


### DevopsagentAssociationConfigurationServiceNowOutputReference <a name="DevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates">reset_enable_webhook_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_webhook_updates` <a name="reset_enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates"></a>

```python
def reset_enable_webhook_updates() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput">enable_webhook_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">enable_webhook_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_webhook_updates_input`<sup>Optional</sup> <a name="enable_webhook_updates_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput"></a>

```python
enable_webhook_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `enable_webhook_updates`<sup>Required</sup> <a name="enable_webhook_updates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```python
enable_webhook_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---


### DevopsagentAssociationConfigurationSlackOutputReference <a name="DevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget">put_transmission_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget">reset_transmission_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName">reset_workspace_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transmission_target` <a name="put_transmission_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget"></a>

```python
def put_transmission_target(
  incident_response_target: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget = None
) -> None
```

###### `incident_response_target`<sup>Optional</sup> <a name="incident_response_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget.parameter.incidentResponseTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

##### `reset_transmission_target` <a name="reset_transmission_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget"></a>

```python
def reset_transmission_target() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

##### `reset_workspace_name` <a name="reset_workspace_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName"></a>

```python
def reset_workspace_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">transmission_target</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput">transmission_target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput">workspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">workspace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transmission_target`<sup>Required</sup> <a name="transmission_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```python
transmission_target: DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `transmission_target_input`<sup>Optional</sup> <a name="transmission_target_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput"></a>

```python
transmission_target_input: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_name_input`<sup>Optional</sup> <a name="workspace_name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput"></a>

```python
workspace_name_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_name`<sup>Required</sup> <a name="workspace_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```python
workspace_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName">reset_channel_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName"></a>

```python
def reset_channel_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget">put_incident_response_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget">reset_incident_response_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_incident_response_target` <a name="put_incident_response_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget"></a>

```python
def put_incident_response_target(
  channel_id: str = None,
  channel_name: str = None
) -> None
```

###### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.channelId"></a>

- *Type:* str

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

###### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.channelName"></a>

- *Type:* str

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

##### `reset_incident_response_target` <a name="reset_incident_response_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget"></a>

```python
def reset_incident_response_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">incident_response_target</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput">incident_response_target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incident_response_target`<sup>Required</sup> <a name="incident_response_target" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```python
incident_response_target: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `incident_response_target_input`<sup>Optional</sup> <a name="incident_response_target_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput"></a>

```python
incident_response_target_input: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType">reset_account_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn">reset_assumable_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resources` <a name="put_resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources"></a>

```python
def put_resources(
  value: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_account_type` <a name="reset_account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType"></a>

```python
def reset_account_type() -> None
```

##### `reset_assumable_role_arn` <a name="reset_assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn"></a>

```python
def reset_assumable_role_arn() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput">account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput">assumable_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">assumable_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```python
resources: DevopsagentAssociationConfigurationSourceAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```python
tags: DevopsagentAssociationConfigurationSourceAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_type_input`<sup>Optional</sup> <a name="account_type_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput"></a>

```python
account_type_input: str
```

- *Type:* str

---

##### `assumable_role_arn_input`<sup>Optional</sup> <a name="assumable_role_arn_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput"></a>

```python
assumable_role_arn_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput"></a>

```python
resources_input: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `assumable_role_arn`<sup>Required</sup> <a name="assumable_role_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```python
assumable_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSourceAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---


### DevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>]

---


### DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata">reset_resource_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_resource_metadata` <a name="reset_resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata"></a>

```python
def reset_resource_metadata() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput">resource_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">resource_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `resource_metadata_input`<sup>Optional</sup> <a name="resource_metadata_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```python
resource_metadata_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `resource_metadata`<sup>Required</sup> <a name="resource_metadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```python
resource_metadata: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DevopsagentAssociationConfigurationSourceAwsTagsList <a name="DevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsagentAssociationConfigurationSourceAwsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>]

---


### DevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsagent_association

devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>

---



