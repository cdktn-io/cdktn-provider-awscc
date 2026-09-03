# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktn/provider-awscc.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger awscc_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTrigger(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[GlueTriggerActions],
  type: str,
  description: str = None,
  event_batching_condition: GlueTriggerEventBatchingCondition = None,
  name: str = None,
  predicate: GlueTriggerPredicate = None,
  schedule: str = None,
  start_on_creation: bool | IResolvable = None,
  tags: str = None,
  workflow_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]</code> | The actions initiated by this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of trigger that this is. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.eventBatchingCondition">event_batching_condition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.predicate">predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | The predicate of this trigger, which defines when it will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | A cron expression used to specify the schedule. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.startOnCreation">start_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.tags">tags</a></code> | <code>str</code> | The tags to use with this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.workflowName">workflow_name</a></code> | <code>str</code> | The name of the workflow associated with the trigger. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]

The actions initiated by this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.type"></a>

- *Type:* str

The type of trigger that this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#type GlueTrigger#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.description"></a>

- *Type:* str

A description of this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#description GlueTrigger#description}

---

##### `event_batching_condition`<sup>Optional</sup> <a name="event_batching_condition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.eventBatchingCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.name"></a>

- *Type:* str

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#name GlueTrigger#name}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.predicate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

The predicate of this trigger, which defines when it will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.schedule"></a>

- *Type:* str

A cron expression used to specify the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}

---

##### `start_on_creation`<sup>Optional</sup> <a name="start_on_creation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.startOnCreation"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.tags"></a>

- *Type:* str

The tags to use with this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#tags GlueTrigger#tags}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.workflowName"></a>

- *Type:* str

The name of the workflow associated with the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition">put_event_batching_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition">reset_event_batching_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate">reset_predicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation">reset_start_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName">reset_workflow_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[GlueTriggerActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]

---

##### `put_event_batching_condition` <a name="put_event_batching_condition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```python
def put_event_batching_condition(
  batch_size: typing.Union[int, float] = None,
  batch_window: typing.Union[int, float] = None
) -> None
```

###### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}

---

###### `batch_window`<sup>Optional</sup> <a name="batch_window" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.batchWindow"></a>

- *Type:* typing.Union[int, float]

Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}

---

##### `put_predicate` <a name="put_predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate"></a>

```python
def put_predicate(
  conditions: IResolvable | typing.List[GlueTriggerPredicateConditions] = None,
  logical: str = None
) -> None
```

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]

A list of the conditions that determine when the trigger will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

###### `logical`<sup>Optional</sup> <a name="logical" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate.parameter.logical"></a>

- *Type:* str

An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#logical GlueTrigger#logical}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_batching_condition` <a name="reset_event_batching_condition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```python
def reset_event_batching_condition() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_predicate` <a name="reset_predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate"></a>

```python
def reset_predicate() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_on_creation` <a name="reset_start_on_creation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```python
def reset_start_on_creation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_workflow_name` <a name="reset_workflow_name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```python
def reset_workflow_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition">event_batching_condition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate">predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">event_batching_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput">predicate_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput">start_on_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation">start_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions"></a>

```python
actions: GlueTriggerActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `event_batching_condition`<sup>Required</sup> <a name="event_batching_condition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```python
event_batching_condition: GlueTriggerEventBatchingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate"></a>

```python
predicate: GlueTriggerPredicateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[GlueTriggerActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_batching_condition_input`<sup>Optional</sup> <a name="event_batching_condition_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```python
event_batching_condition_input: IResolvable | GlueTriggerEventBatchingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput"></a>

```python
predicate_input: IResolvable | GlueTriggerPredicate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_on_creation_input`<sup>Optional</sup> <a name="start_on_creation_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```python
start_on_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_on_creation`<sup>Required</sup> <a name="start_on_creation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```python
start_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerActions(
  arguments: str = None,
  crawler_name: str = None,
  job_name: str = None,
  notification_property: GlueTriggerActionsNotificationProperty = None,
  security_configuration: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments">arguments</a></code> | <code>str</code> | The job arguments used when this trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName">crawler_name</a></code> | <code>str</code> | The name of the crawler to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName">job_name</a></code> | <code>str</code> | The name of a job to be executed. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | Specifies configuration properties of a job run notification. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The JobRun timeout in minutes. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

The job arguments used when this trigger fires.

For this job run, they replace the default arguments set in the job definition itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#arguments GlueTrigger#arguments}

---

##### `crawler_name`<sup>Optional</sup> <a name="crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

The name of the crawler to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

The name of a job to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `notification_property`<sup>Optional</sup> <a name="notification_property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```python
notification_property: GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

Specifies configuration properties of a job run notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

The name of the SecurityConfiguration structure to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The JobRun timeout in minutes.

This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#timeout GlueTrigger#timeout}

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerActionsNotificationProperty(
  notify_delay_after: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | After a job run starts, the number of minutes to wait before sending a job run delay notification. |

---

##### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

After a job run starts, the number of minutes to wait before sending a job run delay notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[GlueTriggerActions],
  type: str,
  description: str = None,
  event_batching_condition: GlueTriggerEventBatchingCondition = None,
  name: str = None,
  predicate: GlueTriggerPredicate = None,
  schedule: str = None,
  start_on_creation: bool | IResolvable = None,
  tags: str = None,
  workflow_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]</code> | The actions initiated by this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type">type</a></code> | <code>str</code> | The type of trigger that this is. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description">description</a></code> | <code>str</code> | A description of this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">event_batching_condition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name">name</a></code> | <code>str</code> | The name of the trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | The predicate of this trigger, which defines when it will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule">schedule</a></code> | <code>str</code> | A cron expression used to specify the schedule. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation">start_on_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags">tags</a></code> | <code>str</code> | The tags to use with this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName">workflow_name</a></code> | <code>str</code> | The name of the workflow associated with the trigger. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions"></a>

```python
actions: IResolvable | typing.List[GlueTriggerActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]

The actions initiated by this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of trigger that this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#type GlueTrigger#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#description GlueTrigger#description}

---

##### `event_batching_condition`<sup>Optional</sup> <a name="event_batching_condition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```python
event_batching_condition: GlueTriggerEventBatchingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#name GlueTrigger#name}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```python
predicate: GlueTriggerPredicate
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

The predicate of this trigger, which defines when it will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

A cron expression used to specify the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}

---

##### `start_on_creation`<sup>Optional</sup> <a name="start_on_creation" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```python
start_on_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

The tags to use with this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#tags GlueTrigger#tags}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

The name of the workflow associated with the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerEventBatchingCondition(
  batch_size: typing.Union[int, float] = None,
  batch_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">batch_window</a></code> | <code>typing.Union[int, float]</code> | Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. |

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}

---

##### `batch_window`<sup>Optional</sup> <a name="batch_window" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```python
batch_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerPredicate(
  conditions: IResolvable | typing.List[GlueTriggerPredicateConditions] = None,
  logical: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]</code> | A list of the conditions that determine when the trigger will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical">logical</a></code> | <code>str</code> | An optional field if only one condition is listed. If multiple conditions are listed, then this field is required. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```python
conditions: IResolvable | typing.List[GlueTriggerPredicateConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]

A list of the conditions that determine when the trigger will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

##### `logical`<sup>Optional</sup> <a name="logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```python
logical: str
```

- *Type:* str

An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#logical GlueTrigger#logical}

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerPredicateConditions(
  crawler_name: str = None,
  crawl_state: str = None,
  job_name: str = None,
  logical_operator: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">crawler_name</a></code> | <code>str</code> | The name of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">crawl_state</a></code> | <code>str</code> | The state of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName">job_name</a></code> | <code>str</code> | The name of the job whose JobRuns this condition applies to, and on which this trigger waits. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">logical_operator</a></code> | <code>str</code> | A logical operator. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state">state</a></code> | <code>str</code> | The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED. |

---

##### `crawler_name`<sup>Optional</sup> <a name="crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

The name of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `crawl_state`<sup>Optional</sup> <a name="crawl_state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```python
crawl_state: str
```

- *Type:* str

The state of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

The name of the job whose JobRuns this condition applies to, and on which this trigger waits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `logical_operator`<sup>Optional</sup> <a name="logical_operator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

A logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```python
state: str
```

- *Type:* str

The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#state GlueTrigger#state}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTriggerActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>]

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">reset_notify_delay_after</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notify_delay_after` <a name="reset_notify_delay_after" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```python
def reset_notify_delay_after() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">notify_delay_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">notify_delay_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notify_delay_after_input`<sup>Optional</sup> <a name="notify_delay_after_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```python
notify_delay_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_delay_after`<sup>Required</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```python
notify_delay_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTriggerActionsNotificationProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">put_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">reset_crawler_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">reset_notification_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_property` <a name="put_notification_property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```python
def put_notification_property(
  notify_delay_after: typing.Union[int, float] = None
) -> None
```

###### `notify_delay_after`<sup>Optional</sup> <a name="notify_delay_after" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.notifyDelayAfter"></a>

- *Type:* typing.Union[int, float]

After a job run starts, the number of minutes to wait before sending a job run delay notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_crawler_name` <a name="reset_crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```python
def reset_crawler_name() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_notification_property` <a name="reset_notification_property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```python
def reset_notification_property() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">notification_property</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">crawler_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">notification_property_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">crawler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_property`<sup>Required</sup> <a name="notification_property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```python
notification_property: GlueTriggerActionsNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```python
arguments_input: str
```

- *Type:* str

---

##### `crawler_name_input`<sup>Optional</sup> <a name="crawler_name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```python
crawler_name_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `notification_property_input`<sup>Optional</sup> <a name="notification_property_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```python
notification_property_input: IResolvable | GlueTriggerActionsNotificationProperty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `crawler_name`<sup>Required</sup> <a name="crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTriggerActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerEventBatchingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">reset_batch_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_batch_window` <a name="reset_batch_window" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```python
def reset_batch_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">batch_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">batch_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_window_input`<sup>Optional</sup> <a name="batch_window_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```python
batch_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_window`<sup>Required</sup> <a name="batch_window" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```python
batch_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTriggerEventBatchingCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerPredicateConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueTriggerPredicateConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerPredicateConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">reset_crawler_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">reset_crawl_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">reset_logical_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_crawler_name` <a name="reset_crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```python
def reset_crawler_name() -> None
```

##### `reset_crawl_state` <a name="reset_crawl_state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```python
def reset_crawl_state() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_logical_operator` <a name="reset_logical_operator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```python
def reset_logical_operator() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">crawler_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">crawl_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">crawler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">crawl_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_name_input`<sup>Optional</sup> <a name="crawler_name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```python
crawler_name_input: str
```

- *Type:* str

---

##### `crawl_state_input`<sup>Optional</sup> <a name="crawl_state_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```python
crawl_state_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `logical_operator_input`<sup>Optional</sup> <a name="logical_operator_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```python
logical_operator_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `crawler_name`<sup>Required</sup> <a name="crawler_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```python
crawler_name: str
```

- *Type:* str

---

##### `crawl_state`<sup>Required</sup> <a name="crawl_state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```python
crawl_state: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTriggerPredicateConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_trigger

glueTrigger.GlueTriggerPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">reset_logical</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[GlueTriggerPredicateConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_logical` <a name="reset_logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```python
def reset_logical() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">logical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">logical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```python
conditions: GlueTriggerPredicateConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[GlueTriggerPredicateConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>]

---

##### `logical_input`<sup>Optional</sup> <a name="logical_input" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```python
logical_input: str
```

- *Type:* str

---

##### `logical`<sup>Required</sup> <a name="logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```python
logical: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueTriggerPredicate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---



