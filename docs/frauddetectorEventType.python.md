# `frauddetectorEventType` Submodule <a name="`frauddetectorEventType` Submodule" id="@cdktn/provider-awscc.frauddetectorEventType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorEventType <a name="FrauddetectorEventType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type awscc_frauddetector_event_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_types: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes],
  event_variables: IResolvable | typing.List[FrauddetectorEventTypeEventVariables],
  labels: IResolvable | typing.List[FrauddetectorEventTypeLabels],
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[FrauddetectorEventTypeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.eventVariables">event_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]</code> | Tags associated with this event type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}.

---

##### `event_variables`<sup>Required</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.eventVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}.

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.labels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.name"></a>

- *Type:* str

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.description"></a>

- *Type:* str

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables">put_event_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]

---

##### `put_event_variables` <a name="put_event_variables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables"></a>

```python
def put_event_variables(
  value: IResolvable | typing.List[FrauddetectorEventTypeEventVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putEventVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]

---

##### `put_labels` <a name="put_labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels"></a>

```python
def put_labels(
  value: IResolvable | typing.List[FrauddetectorEventTypeLabels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorEventTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FrauddetectorEventType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FrauddetectorEventType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FrauddetectorEventType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorEventType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables">event_variables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput">event_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput">labels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypes"></a>

```python
entity_types: FrauddetectorEventTypeEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList">FrauddetectorEventTypeEntityTypesList</a>

---

##### `event_variables`<sup>Required</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariables"></a>

```python
event_variables: FrauddetectorEventTypeEventVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList">FrauddetectorEventTypeEventVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labels"></a>

```python
labels: FrauddetectorEventTypeLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList">FrauddetectorEventTypeLabelsList</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tags"></a>

```python
tags: FrauddetectorEventTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList">FrauddetectorEventTypeTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]

---

##### `event_variables_input`<sup>Optional</sup> <a name="event_variables_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.eventVariablesInput"></a>

```python
event_variables_input: IResolvable | typing.List[FrauddetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.labelsInput"></a>

```python
labels_input: IResolvable | typing.List[FrauddetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorEventTypeConfig <a name="FrauddetectorEventTypeConfig" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entity_types: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes],
  event_variables: IResolvable | typing.List[FrauddetectorEventTypeEventVariables],
  labels: IResolvable | typing.List[FrauddetectorEventTypeLabels],
  name: str,
  description: str = None,
  tags: IResolvable | typing.List[FrauddetectorEventTypeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables">event_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name">name</a></code> | <code>str</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description">description</a></code> | <code>str</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]</code> | Tags associated with this event type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#entity_types FrauddetectorEventType#entity_types}.

---

##### `event_variables`<sup>Required</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.eventVariables"></a>

```python
event_variables: IResolvable | typing.List[FrauddetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#event_variables FrauddetectorEventType#event_variables}.

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.labels"></a>

```python
labels: IResolvable | typing.List[FrauddetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#labels FrauddetectorEventType#labels}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypes <a name="FrauddetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypes(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorEventTypeEntityTypesTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime">created_time</a></code> | <code>str</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeEntityTypesTags <a name="FrauddetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeEventVariables <a name="FrauddetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariables(
  arn: str = None,
  created_time: str = None,
  data_source: str = None,
  data_type: str = None,
  default_value: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorEventTypeEventVariablesTags] = None,
  variable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime">created_time</a></code> | <code>str</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]</code> | Tags associated with this event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType">variable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#data_source FrauddetectorEventType#data_source}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#data_type FrauddetectorEventType#data_type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#default_value FrauddetectorEventType#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#variable_type FrauddetectorEventType#variable_type}.

---

### FrauddetectorEventTypeEventVariablesTags <a name="FrauddetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeLabels <a name="FrauddetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabels(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorEventTypeLabelsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime">created_time</a></code> | <code>str</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#arn FrauddetectorEventType#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#created_time FrauddetectorEventType#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#description FrauddetectorEventType#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#inline FrauddetectorEventType#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#last_updated_time FrauddetectorEventType#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#name FrauddetectorEventType#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#tags FrauddetectorEventType#tags}

---

### FrauddetectorEventTypeLabelsTags <a name="FrauddetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabelsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

### FrauddetectorEventTypeTags <a name="FrauddetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#key FrauddetectorEventType#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_event_type#value FrauddetectorEventType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorEventTypeEntityTypesList <a name="FrauddetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>]

---


### FrauddetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorEventTypeEntityTypesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```python
tags: FrauddetectorEventTypeEntityTypesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList">FrauddetectorEventTypeEntityTypesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypes">FrauddetectorEventTypeEntityTypes</a>

---


### FrauddetectorEventTypeEntityTypesTagsList <a name="FrauddetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>]

---


### FrauddetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeEntityTypesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEntityTypesTags">FrauddetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorEventTypeEventVariablesList <a name="FrauddetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>]

---


### FrauddetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType">reset_variable_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorEventTypeEventVariablesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_variable_type` <a name="reset_variable_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```python
def reset_variable_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```python
tags: FrauddetectorEventTypeEventVariablesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList">FrauddetectorEventTypeEventVariablesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeEventVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariables">FrauddetectorEventTypeEventVariables</a>

---


### FrauddetectorEventTypeEventVariablesTagsList <a name="FrauddetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>]

---


### FrauddetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeEventVariablesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeEventVariablesTags">FrauddetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorEventTypeLabelsList <a name="FrauddetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>]

---


### FrauddetectorEventTypeLabelsOutputReference <a name="FrauddetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorEventTypeLabelsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tags"></a>

```python
tags: FrauddetectorEventTypeLabelsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList">FrauddetectorEventTypeLabelsTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeLabels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabels">FrauddetectorEventTypeLabels</a>

---


### FrauddetectorEventTypeLabelsTagsList <a name="FrauddetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>]

---


### FrauddetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeLabelsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeLabelsTags">FrauddetectorEventTypeLabelsTags</a>

---


### FrauddetectorEventTypeTagsList <a name="FrauddetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>]

---


### FrauddetectorEventTypeTagsOutputReference <a name="FrauddetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_event_type

frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorEventTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorEventType.FrauddetectorEventTypeTags">FrauddetectorEventTypeTags</a>

---



