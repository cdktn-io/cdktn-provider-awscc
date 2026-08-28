# `dataexchangeEventAction` Submodule <a name="`dataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeEventAction <a name="DataexchangeEventAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: DataexchangeEventActionAction,
  event: DataexchangeEventActionEvent,
  tags: IResolvable | typing.List[DataexchangeEventActionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | What occurs after a certain event. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | What occurs to start an action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]</code> | The tags for the event action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

What occurs after a certain event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.event"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

What occurs to start an action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]

The tags for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#tags DataexchangeEventAction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent">put_event</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction"></a>

```python
def put_action(
  export_revision_to_s3: DataexchangeEventActionActionExportRevisionToS3 = None
) -> None
```

###### `export_revision_to_s3`<sup>Optional</sup> <a name="export_revision_to_s3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putAction.parameter.exportRevisionToS3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

Details of the operation to be performed by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

##### `put_event` <a name="put_event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent"></a>

```python
def put_event(
  revision_published: DataexchangeEventActionEventRevisionPublished = None
) -> None
```

###### `revision_published`<sup>Optional</sup> <a name="revision_published" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putEvent.parameter.revisionPublished"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

Information about the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DataexchangeEventActionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataexchangeEventAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId">event_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput">event_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.action"></a>

```python
action: DataexchangeEventActionActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference">DataexchangeEventActionActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.event"></a>

```python
event: DataexchangeEventActionEventOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference">DataexchangeEventActionEventOutputReference</a>

---

##### `event_action_id`<sup>Required</sup> <a name="event_action_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventActionId"></a>

```python
event_action_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tags"></a>

```python
tags: DataexchangeEventActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList">DataexchangeEventActionTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.actionInput"></a>

```python
action_input: IResolvable | DataexchangeEventActionAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.eventInput"></a>

```python
event_input: IResolvable | DataexchangeEventActionEvent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DataexchangeEventActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeEventActionAction <a name="DataexchangeEventActionAction" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionAction(
  export_revision_to_s3: DataexchangeEventActionActionExportRevisionToS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3">export_revision_to_s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | Details of the operation to be performed by the job. |

---

##### `export_revision_to_s3`<sup>Optional</sup> <a name="export_revision_to_s3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3"></a>

```python
export_revision_to_s3: DataexchangeEventActionActionExportRevisionToS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

Details of the operation to be performed by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

### DataexchangeEventActionActionExportRevisionToS3 <a name="DataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3(
  encryption: DataexchangeEventActionActionExportRevisionToS3Encryption = None,
  revision_destination: DataexchangeEventActionActionExportRevisionToS3RevisionDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | Encryption configuration of the export job. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination">revision_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | A revision destination is the Amazon S3 bucket folder destination to where the export will be sent. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption"></a>

```python
encryption: DataexchangeEventActionActionExportRevisionToS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

Encryption configuration of the export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

##### `revision_destination`<sup>Optional</sup> <a name="revision_destination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination"></a>

```python
revision_destination: DataexchangeEventActionActionExportRevisionToS3RevisionDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

### DataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption(
  kms_key_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type">type</a></code> | <code>str</code> | The type of server side encryption used for encrypting the objects in Amazon S3. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type"></a>

```python
type: str
```

- *Type:* str

The type of server side encryption used for encrypting the objects in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}

---

### DataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination(
  bucket: str = None,
  key_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket">bucket</a></code> | <code>str</code> | The Amazon S3 bucket that is the destination for the event action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern">key_pattern</a></code> | <code>str</code> | A string representing the pattern for generated names of the individual assets in the revision. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Amazon S3 bucket that is the destination for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}

---

##### `key_pattern`<sup>Optional</sup> <a name="key_pattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern"></a>

```python
key_pattern: str
```

- *Type:* str

A string representing the pattern for generated names of the individual assets in the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}

---

### DataexchangeEventActionConfig <a name="DataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: DataexchangeEventActionAction,
  event: DataexchangeEventActionEvent,
  tags: IResolvable | typing.List[DataexchangeEventActionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | What occurs after a certain event. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | What occurs to start an action. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]</code> | The tags for the event action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.action"></a>

```python
action: DataexchangeEventActionAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

What occurs after a certain event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.event"></a>

```python
event: DataexchangeEventActionEvent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

What occurs to start an action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DataexchangeEventActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]

The tags for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#tags DataexchangeEventAction#tags}

---

### DataexchangeEventActionEvent <a name="DataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEvent(
  revision_published: DataexchangeEventActionEventRevisionPublished = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished">revision_published</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | Information about the published revision. |

---

##### `revision_published`<sup>Optional</sup> <a name="revision_published" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished"></a>

```python
revision_published: DataexchangeEventActionEventRevisionPublished
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

Information about the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

### DataexchangeEventActionEventRevisionPublished <a name="DataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished(
  data_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId">data_set_id</a></code> | <code>str</code> | The data set ID of the published revision. |

---

##### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

The data set ID of the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}

---

### DataexchangeEventActionTags <a name="DataexchangeEventActionTags" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key DataexchangeEventAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#value DataexchangeEventAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionActionExportRevisionToS3Encryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---


### DataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination">put_revision_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination">reset_revision_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption"></a>

```python
def put_encryption(
  kms_key_arn: str = None,
  type: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.type"></a>

- *Type:* str

The type of server side encryption used for encrypting the objects in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}

---

##### `put_revision_destination` <a name="put_revision_destination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination"></a>

```python
def put_revision_destination(
  bucket: str = None,
  key_pattern: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.bucket"></a>

- *Type:* str

The Amazon S3 bucket that is the destination for the event action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}

---

###### `key_pattern`<sup>Optional</sup> <a name="key_pattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.keyPattern"></a>

- *Type:* str

A string representing the pattern for generated names of the individual assets in the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}

---

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_revision_destination` <a name="reset_revision_destination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination"></a>

```python
def reset_revision_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">revision_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput">revision_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```python
encryption: DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `revision_destination`<sup>Required</sup> <a name="revision_destination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```python
revision_destination: DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput"></a>

```python
encryption_input: IResolvable | DataexchangeEventActionActionExportRevisionToS3Encryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

---

##### `revision_destination_input`<sup>Optional</sup> <a name="revision_destination_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput"></a>

```python
revision_destination_input: IResolvable | DataexchangeEventActionActionExportRevisionToS3RevisionDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionActionExportRevisionToS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern">reset_key_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key_pattern` <a name="reset_key_pattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern"></a>

```python
def reset_key_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput">key_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">key_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_pattern_input`<sup>Optional</sup> <a name="key_pattern_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput"></a>

```python
key_pattern_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_pattern`<sup>Required</sup> <a name="key_pattern" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```python
key_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionActionExportRevisionToS3RevisionDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---


### DataexchangeEventActionActionOutputReference <a name="DataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3">put_export_revision_to_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3">reset_export_revision_to_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_export_revision_to_s3` <a name="put_export_revision_to_s3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3"></a>

```python
def put_export_revision_to_s3(
  encryption: DataexchangeEventActionActionExportRevisionToS3Encryption = None,
  revision_destination: DataexchangeEventActionActionExportRevisionToS3RevisionDestination = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption">DataexchangeEventActionActionExportRevisionToS3Encryption</a>

Encryption configuration of the export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

###### `revision_destination`<sup>Optional</sup> <a name="revision_destination" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.revisionDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

##### `reset_export_revision_to_s3` <a name="reset_export_revision_to_s3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3"></a>

```python
def reset_export_revision_to_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3">export_revision_to_s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input">export_revision_to_s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_revision_to_s3`<sup>Required</sup> <a name="export_revision_to_s3" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```python
export_revision_to_s3: DataexchangeEventActionActionExportRevisionToS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference">DataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `export_revision_to_s3_input`<sup>Optional</sup> <a name="export_revision_to_s3_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input"></a>

```python
export_revision_to_s3_input: IResolvable | DataexchangeEventActionActionExportRevisionToS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3">DataexchangeEventActionActionExportRevisionToS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionAction">DataexchangeEventActionAction</a>

---


### DataexchangeEventActionEventOutputReference <a name="DataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished">put_revision_published</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished">reset_revision_published</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_revision_published` <a name="put_revision_published" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished"></a>

```python
def put_revision_published(
  data_set_id: str = None
) -> None
```

###### `data_set_id`<sup>Optional</sup> <a name="data_set_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished.parameter.dataSetId"></a>

- *Type:* str

The data set ID of the published revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}

---

##### `reset_revision_published` <a name="reset_revision_published" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished"></a>

```python
def reset_revision_published() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished">revision_published</a></code> | <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput">revision_published_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_published`<sup>Required</sup> <a name="revision_published" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```python
revision_published: DataexchangeEventActionEventRevisionPublishedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference">DataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `revision_published_input`<sup>Optional</sup> <a name="revision_published_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput"></a>

```python
revision_published_input: IResolvable | DataexchangeEventActionEventRevisionPublished
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionEvent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEvent">DataexchangeEventActionEvent</a>

---


### DataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId">reset_data_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_set_id` <a name="reset_data_set_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resetDataSetId"></a>

```python
def reset_data_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput">data_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">data_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_id_input`<sup>Optional</sup> <a name="data_set_id_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput"></a>

```python
data_set_id_input: str
```

- *Type:* str

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionEventRevisionPublished
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished">DataexchangeEventActionEventRevisionPublished</a>

---


### DataexchangeEventActionTagsList <a name="DataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeEventActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataexchangeEventActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>]

---


### DataexchangeEventActionTagsOutputReference <a name="DataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dataexchange_event_action

dataexchangeEventAction.DataexchangeEventActionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataexchangeEventActionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dataexchangeEventAction.DataexchangeEventActionTags">DataexchangeEventActionTags</a>

---



