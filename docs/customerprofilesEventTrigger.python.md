# `customerprofilesEventTrigger` Submodule <a name="`customerprofilesEventTrigger` Submodule" id="@cdktn/provider-awscc.customerprofilesEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesEventTrigger <a name="CustomerprofilesEventTrigger" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTrigger(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  event_trigger_conditions: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions],
  event_trigger_name: str,
  object_type_name: str,
  description: str = None,
  event_trigger_limits: CustomerprofilesEventTriggerEventTriggerLimits = None,
  segment_filter: str = None,
  tags: IResolvable | typing.List[CustomerprofilesEventTriggerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerConditions">event_trigger_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]</code> | A list of conditions that determine when an event should trigger the destination. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerName">event_trigger_name</a></code> | <code>str</code> | The unique name of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.objectTypeName">object_type_name</a></code> | <code>str</code> | The unique name of the object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerLimits">event_trigger_limits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.segmentFilter">segment_filter</a></code> | <code>str</code> | The destination is triggered only for profiles that meet the criteria of a segment definition. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}

---

##### `event_trigger_conditions`<sup>Required</sup> <a name="event_trigger_conditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerConditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]

A list of conditions that determine when an event should trigger the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}

---

##### `event_trigger_name`<sup>Required</sup> <a name="event_trigger_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerName"></a>

- *Type:* str

The unique name of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.objectTypeName"></a>

- *Type:* str

The unique name of the object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.description"></a>

- *Type:* str

The description of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}

---

##### `event_trigger_limits`<sup>Optional</sup> <a name="event_trigger_limits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.eventTriggerLimits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}

---

##### `segment_filter`<sup>Optional</sup> <a name="segment_filter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.segmentFilter"></a>

- *Type:* str

The destination is triggered only for profiles that meet the criteria of a segment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions">put_event_trigger_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits">put_event_trigger_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits">reset_event_trigger_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter">reset_segment_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_trigger_conditions` <a name="put_event_trigger_conditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions"></a>

```python
def put_event_trigger_conditions(
  value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]

---

##### `put_event_trigger_limits` <a name="put_event_trigger_limits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits"></a>

```python
def put_event_trigger_limits(
  event_expiration: typing.Union[int, float] = None,
  periods: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods] = None
) -> None
```

###### `event_expiration`<sup>Optional</sup> <a name="event_expiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits.parameter.eventExpiration"></a>

- *Type:* typing.Union[int, float]

Specifies that an event will only trigger the destination if it is processed within a certain latency period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}

---

###### `periods`<sup>Optional</sup> <a name="periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits.parameter.periods"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]

A list of time periods during which the limits apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesEventTriggerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_trigger_limits` <a name="reset_event_trigger_limits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits"></a>

```python
def reset_event_trigger_limits() -> None
```

##### `reset_segment_filter` <a name="reset_segment_filter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter"></a>

```python
def reset_segment_filter() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesEventTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions">event_trigger_conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits">event_trigger_limits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput">event_trigger_conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput">event_trigger_limits_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput">event_trigger_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput">object_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput">segment_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName">event_trigger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName">object_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter">segment_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `event_trigger_conditions`<sup>Required</sup> <a name="event_trigger_conditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions"></a>

```python
event_trigger_conditions: CustomerprofilesEventTriggerEventTriggerConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a>

---

##### `event_trigger_limits`<sup>Required</sup> <a name="event_trigger_limits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits"></a>

```python
event_trigger_limits: CustomerprofilesEventTriggerEventTriggerLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags"></a>

```python
tags: CustomerprofilesEventTriggerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `event_trigger_conditions_input`<sup>Optional</sup> <a name="event_trigger_conditions_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput"></a>

```python
event_trigger_conditions_input: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]

---

##### `event_trigger_limits_input`<sup>Optional</sup> <a name="event_trigger_limits_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput"></a>

```python
event_trigger_limits_input: IResolvable | CustomerprofilesEventTriggerEventTriggerLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `event_trigger_name_input`<sup>Optional</sup> <a name="event_trigger_name_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput"></a>

```python
event_trigger_name_input: str
```

- *Type:* str

---

##### `object_type_name_input`<sup>Optional</sup> <a name="object_type_name_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput"></a>

```python
object_type_name_input: str
```

- *Type:* str

---

##### `segment_filter_input`<sup>Optional</sup> <a name="segment_filter_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput"></a>

```python
segment_filter_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesEventTriggerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `event_trigger_name`<sup>Required</sup> <a name="event_trigger_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName"></a>

```python
event_trigger_name: str
```

- *Type:* str

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

---

##### `segment_filter`<sup>Required</sup> <a name="segment_filter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter"></a>

```python
segment_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesEventTriggerConfig <a name="CustomerprofilesEventTriggerConfig" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  event_trigger_conditions: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions],
  event_trigger_name: str,
  object_type_name: str,
  description: str = None,
  event_trigger_limits: CustomerprofilesEventTriggerEventTriggerLimits = None,
  segment_filter: str = None,
  tags: IResolvable | typing.List[CustomerprofilesEventTriggerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions">event_trigger_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]</code> | A list of conditions that determine when an event should trigger the destination. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName">event_trigger_name</a></code> | <code>str</code> | The unique name of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName">object_type_name</a></code> | <code>str</code> | The unique name of the object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description">description</a></code> | <code>str</code> | The description of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits">event_trigger_limits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter">segment_filter</a></code> | <code>str</code> | The destination is triggered only for profiles that meet the criteria of a segment definition. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}

---

##### `event_trigger_conditions`<sup>Required</sup> <a name="event_trigger_conditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions"></a>

```python
event_trigger_conditions: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]

A list of conditions that determine when an event should trigger the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}

---

##### `event_trigger_name`<sup>Required</sup> <a name="event_trigger_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName"></a>

```python
event_trigger_name: str
```

- *Type:* str

The unique name of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}

---

##### `object_type_name`<sup>Required</sup> <a name="object_type_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName"></a>

```python
object_type_name: str
```

- *Type:* str

The unique name of the object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}

---

##### `event_trigger_limits`<sup>Optional</sup> <a name="event_trigger_limits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits"></a>

```python
event_trigger_limits: CustomerprofilesEventTriggerEventTriggerLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}

---

##### `segment_filter`<sup>Optional</sup> <a name="segment_filter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter"></a>

```python
segment_filter: str
```

- *Type:* str

The destination is triggered only for profiles that meet the criteria of a segment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesEventTriggerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}

---

### CustomerprofilesEventTriggerEventTriggerConditions <a name="CustomerprofilesEventTriggerEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions(
  event_trigger_dimensions: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions],
  logical_operator: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions">event_trigger_dimensions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]</code> | A list of dimensions to be evaluated for the event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator">logical_operator</a></code> | <code>str</code> | The operator used to combine multiple dimensions. |

---

##### `event_trigger_dimensions`<sup>Required</sup> <a name="event_trigger_dimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions"></a>

```python
event_trigger_dimensions: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]

A list of dimensions to be evaluated for the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CustomerprofilesEventTrigger#event_trigger_dimensions}

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

The operator used to combine multiple dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#logical_operator CustomerprofilesEventTrigger#logical_operator}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions(
  object_attributes: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes">object_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]</code> | A list of object attributes to be evaluated. |

---

##### `object_attributes`<sup>Required</sup> <a name="object_attributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes"></a>

```python
object_attributes: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]

A list of object attributes to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#object_attributes CustomerprofilesEventTrigger#object_attributes}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes(
  comparison_operator: str,
  values: typing.List[str],
  field_name: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | The operator used to compare an attribute against a list of values. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values">values</a></code> | <code>typing.List[str]</code> | A list of attribute values used for comparison. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName">field_name</a></code> | <code>str</code> | A field defined within an object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source">source</a></code> | <code>str</code> | An attribute contained within a source object. |

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

The operator used to compare an attribute against a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#comparison_operator CustomerprofilesEventTrigger#comparison_operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of attribute values used for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#values CustomerprofilesEventTrigger#values}

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

A field defined within an object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#field_name CustomerprofilesEventTrigger#field_name}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source"></a>

```python
source: str
```

- *Type:* str

An attribute contained within a source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#source CustomerprofilesEventTrigger#source}

---

### CustomerprofilesEventTriggerEventTriggerLimits <a name="CustomerprofilesEventTriggerEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits(
  event_expiration: typing.Union[int, float] = None,
  periods: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration">event_expiration</a></code> | <code>typing.Union[int, float]</code> | Specifies that an event will only trigger the destination if it is processed within a certain latency period. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods">periods</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]</code> | A list of time periods during which the limits apply. |

---

##### `event_expiration`<sup>Optional</sup> <a name="event_expiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration"></a>

```python
event_expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies that an event will only trigger the destination if it is processed within a certain latency period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}

---

##### `periods`<sup>Optional</sup> <a name="periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods"></a>

```python
periods: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]

A list of time periods during which the limits apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}

---

### CustomerprofilesEventTriggerEventTriggerLimitsPeriods <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods(
  max_invocations_per_profile: typing.Union[int, float] = None,
  unit: str = None,
  unlimited: bool | IResolvable = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile">max_invocations_per_profile</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit">unit</a></code> | <code>str</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, there is no limit on the number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value">value</a></code> | <code>typing.Union[int, float]</code> | The amount of time of the specified unit. |

---

##### `max_invocations_per_profile`<sup>Optional</sup> <a name="max_invocations_per_profile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile"></a>

```python
max_invocations_per_profile: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed number of destination invocations per profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CustomerprofilesEventTrigger#max_invocations_per_profile}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#unit CustomerprofilesEventTrigger#unit}

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, there is no limit on the number of destination invocations per profile.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#unlimited CustomerprofilesEventTrigger#unlimited}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

### CustomerprofilesEventTriggerTags <a name="CustomerprofilesEventTriggerTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#key CustomerprofilesEventTrigger#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes">put_object_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_attributes` <a name="put_object_attributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes"></a>

```python
def put_object_attributes(
  value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes">object_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput">object_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_attributes`<sup>Required</sup> <a name="object_attributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes"></a>

```python
object_attributes: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a>

---

##### `object_attributes_input`<sup>Optional</sup> <a name="object_attributes_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput"></a>

```python
object_attributes_input: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesEventTriggerEventTriggerConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>]

---


### CustomerprofilesEventTriggerEventTriggerConditionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions">put_event_trigger_dimensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_trigger_dimensions` <a name="put_event_trigger_dimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions"></a>

```python
def put_event_trigger_dimensions(
  value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions">event_trigger_dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput">event_trigger_dimensions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput">logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator">logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_trigger_dimensions`<sup>Required</sup> <a name="event_trigger_dimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions"></a>

```python
event_trigger_dimensions: CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a>

---

##### `event_trigger_dimensions_input`<sup>Optional</sup> <a name="event_trigger_dimensions_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput"></a>

```python
event_trigger_dimensions_input: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>]

---

##### `logical_operator_input`<sup>Optional</sup> <a name="logical_operator_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput"></a>

```python
logical_operator_input: str
```

- *Type:* str

---

##### `logical_operator`<sup>Required</sup> <a name="logical_operator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator"></a>

```python
logical_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerEventTriggerConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods">put_periods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration">reset_event_expiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods">reset_periods</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_periods` <a name="put_periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods"></a>

```python
def put_periods(
  value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]

---

##### `reset_event_expiration` <a name="reset_event_expiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration"></a>

```python
def reset_event_expiration() -> None
```

##### `reset_periods` <a name="reset_periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods"></a>

```python
def reset_periods() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods">periods</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput">event_expiration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput">periods_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration">event_expiration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `periods`<sup>Required</sup> <a name="periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods"></a>

```python
periods: CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a>

---

##### `event_expiration_input`<sup>Optional</sup> <a name="event_expiration_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput"></a>

```python
event_expiration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `periods_input`<sup>Optional</sup> <a name="periods_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput"></a>

```python
periods_input: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]

---

##### `event_expiration`<sup>Required</sup> <a name="event_expiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration"></a>

```python
event_expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerEventTriggerLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesEventTriggerEventTriggerLimitsPeriods]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>]

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile">reset_max_invocations_per_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited">reset_unlimited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_invocations_per_profile` <a name="reset_max_invocations_per_profile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile"></a>

```python
def reset_max_invocations_per_profile() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_unlimited` <a name="reset_unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited"></a>

```python
def reset_unlimited() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput">max_invocations_per_profile_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput">unlimited_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile">max_invocations_per_profile</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited">unlimited</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_invocations_per_profile_input`<sup>Optional</sup> <a name="max_invocations_per_profile_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput"></a>

```python
max_invocations_per_profile_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `unlimited_input`<sup>Optional</sup> <a name="unlimited_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput"></a>

```python
unlimited_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_invocations_per_profile`<sup>Required</sup> <a name="max_invocations_per_profile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile"></a>

```python
max_invocations_per_profile: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited"></a>

```python
unlimited: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerEventTriggerLimitsPeriods
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>

---


### CustomerprofilesEventTriggerTagsList <a name="CustomerprofilesEventTriggerTagsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesEventTriggerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesEventTriggerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>]

---


### CustomerprofilesEventTriggerTagsOutputReference <a name="CustomerprofilesEventTriggerTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_event_trigger

customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesEventTriggerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>

---



