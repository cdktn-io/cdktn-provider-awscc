# `eventsEndpoint` Submodule <a name="`eventsEndpoint` Submodule" id="@cdktn/provider-awscc.eventsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEndpoint <a name="EventsEndpoint" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint awscc_events_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_buses: IResolvable | typing.List[EventsEndpointEventBuses],
  routing_config: EventsEndpointRoutingConfig,
  description: str = None,
  name: str = None,
  replication_config: EventsEndpointReplicationConfig = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.eventBuses">event_buses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.replicationConfig">replication_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_buses`<sup>Required</sup> <a name="event_buses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.eventBuses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}.

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.routingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}.

---

##### `replication_config`<sup>Optional</sup> <a name="replication_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.replicationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses">put_event_buses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig">put_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig">put_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetReplicationConfig">reset_replication_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_buses` <a name="put_event_buses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses"></a>

```python
def put_event_buses(
  value: IResolvable | typing.List[EventsEndpointEventBuses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putEventBuses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]

---

##### `put_replication_config` <a name="put_replication_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig"></a>

```python
def put_replication_config(
  state: str = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putReplicationConfig.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#state EventsEndpoint#state}.

---

##### `put_routing_config` <a name="put_routing_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig"></a>

```python
def put_routing_config(
  failover_config: EventsEndpointRoutingConfigFailoverConfig
) -> None
```

###### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.putRoutingConfig.parameter.failoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#failover_config EventsEndpoint#failover_config}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_replication_config` <a name="reset_replication_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetReplicationConfig"></a>

```python
def reset_replication_config() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EventsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EventsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventsEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBuses">event_buses</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList">EventsEndpointEventBusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfig">replication_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference">EventsEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference">EventsEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBusesInput">event_buses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfigInput">replication_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfigInput">routing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `event_buses`<sup>Required</sup> <a name="event_buses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBuses"></a>

```python
event_buses: EventsEndpointEventBusesList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList">EventsEndpointEventBusesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_config`<sup>Required</sup> <a name="replication_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfig"></a>

```python
replication_config: EventsEndpointReplicationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference">EventsEndpointReplicationConfigOutputReference</a>

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfig"></a>

```python
routing_config: EventsEndpointRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference">EventsEndpointRoutingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_buses_input`<sup>Optional</sup> <a name="event_buses_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.eventBusesInput"></a>

```python
event_buses_input: IResolvable | typing.List[EventsEndpointEventBuses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replication_config_input`<sup>Optional</sup> <a name="replication_config_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.replicationConfigInput"></a>

```python
replication_config_input: IResolvable | EventsEndpointReplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `routing_config_input`<sup>Optional</sup> <a name="routing_config_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.routingConfigInput"></a>

```python
routing_config_input: IResolvable | EventsEndpointRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEndpointConfig <a name="EventsEndpointConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_buses: IResolvable | typing.List[EventsEndpointEventBuses],
  routing_config: EventsEndpointRoutingConfig,
  description: str = None,
  name: str = None,
  replication_config: EventsEndpointReplicationConfig = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.eventBuses">event_buses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.replicationConfig">replication_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_buses`<sup>Required</sup> <a name="event_buses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.eventBuses"></a>

```python
event_buses: IResolvable | typing.List[EventsEndpointEventBuses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_buses EventsEndpoint#event_buses}.

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.routingConfig"></a>

```python
routing_config: EventsEndpointRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#routing_config EventsEndpoint#routing_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#description EventsEndpoint#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#name EventsEndpoint#name}.

---

##### `replication_config`<sup>Optional</sup> <a name="replication_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.replicationConfig"></a>

```python
replication_config: EventsEndpointReplicationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#replication_config EventsEndpoint#replication_config}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#role_arn EventsEndpoint#role_arn}.

---

### EventsEndpointEventBuses <a name="EventsEndpointEventBuses" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointEventBuses(
  event_bus_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_bus_arn EventsEndpoint#event_bus_arn}. |

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#event_bus_arn EventsEndpoint#event_bus_arn}.

---

### EventsEndpointReplicationConfig <a name="EventsEndpointReplicationConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointReplicationConfig(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#state EventsEndpoint#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#state EventsEndpoint#state}.

---

### EventsEndpointRoutingConfig <a name="EventsEndpointRoutingConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfig(
  failover_config: EventsEndpointRoutingConfigFailoverConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#failover_config EventsEndpoint#failover_config}. |

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig.property.failoverConfig"></a>

```python
failover_config: EventsEndpointRoutingConfigFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#failover_config EventsEndpoint#failover_config}.

---

### EventsEndpointRoutingConfigFailoverConfig <a name="EventsEndpointRoutingConfigFailoverConfig" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig(
  primary: EventsEndpointRoutingConfigFailoverConfigPrimary,
  secondary: EventsEndpointRoutingConfigFailoverConfigSecondary
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#primary EventsEndpoint#primary}. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.secondary">secondary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#secondary EventsEndpoint#secondary}. |

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.primary"></a>

```python
primary: EventsEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#primary EventsEndpoint#primary}.

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig.property.secondary"></a>

```python
secondary: EventsEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#secondary EventsEndpoint#secondary}.

---

### EventsEndpointRoutingConfigFailoverConfigPrimary <a name="EventsEndpointRoutingConfigFailoverConfigPrimary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary(
  health_check: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck">health_check</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#health_check EventsEndpoint#health_check}. |

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#health_check EventsEndpoint#health_check}.

---

### EventsEndpointRoutingConfigFailoverConfigSecondary <a name="EventsEndpointRoutingConfigFailoverConfigSecondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary(
  route: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.property.route">route</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#route EventsEndpoint#route}. |

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary.property.route"></a>

```python
route: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#route EventsEndpoint#route}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEndpointEventBusesList <a name="EventsEndpointEventBusesList" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointEventBusesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsEndpointEventBusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsEndpointEventBuses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>]

---


### EventsEndpointEventBusesOutputReference <a name="EventsEndpointEventBusesOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointEventBusesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBusesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointEventBuses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointEventBuses">EventsEndpointEventBuses</a>

---


### EventsEndpointReplicationConfigOutputReference <a name="EventsEndpointReplicationConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointReplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointReplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointReplicationConfig">EventsEndpointReplicationConfig</a>

---


### EventsEndpointRoutingConfigFailoverConfigOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary">put_secondary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary` <a name="put_primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary"></a>

```python
def put_primary(
  health_check: str
) -> None
```

###### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putPrimary.parameter.healthCheck"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#health_check EventsEndpoint#health_check}.

---

##### `put_secondary` <a name="put_secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary"></a>

```python
def put_secondary(
  route: str
) -> None
```

###### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.putSecondary.parameter.route"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#route EventsEndpoint#route}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">secondary</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput">primary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput">secondary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```python
primary: EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference">EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```python
secondary: EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference">EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput"></a>

```python
primary_input: IResolvable | EventsEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `secondary_input`<sup>Optional</sup> <a name="secondary_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput"></a>

```python
secondary_input: IResolvable | EventsEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointRoutingConfigFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

---


### EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput">health_check_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">health_check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput"></a>

```python
health_check_input: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```python
health_check: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointRoutingConfigFailoverConfigPrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

---


### EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput">route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput"></a>

```python
route_input: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```python
route: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointRoutingConfigFailoverConfigSecondary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

---


### EventsEndpointRoutingConfigOutputReference <a name="EventsEndpointRoutingConfigOutputReference" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_endpoint

eventsEndpoint.EventsEndpointRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig">put_failover_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failover_config` <a name="put_failover_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig"></a>

```python
def put_failover_config(
  primary: EventsEndpointRoutingConfigFailoverConfigPrimary,
  secondary: EventsEndpointRoutingConfigFailoverConfigSecondary
) -> None
```

###### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.primary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigPrimary">EventsEndpointRoutingConfigFailoverConfigPrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#primary EventsEndpoint#primary}.

---

###### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.secondary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigSecondary">EventsEndpointRoutingConfigFailoverConfigSecondary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/events_endpoint#secondary EventsEndpoint#secondary}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfig">failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference">EventsEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfigInput">failover_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_config`<sup>Required</sup> <a name="failover_config" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```python
failover_config: EventsEndpointRoutingConfigFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfigOutputReference">EventsEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `failover_config_input`<sup>Optional</sup> <a name="failover_config_input" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.failoverConfigInput"></a>

```python
failover_config_input: IResolvable | EventsEndpointRoutingConfigFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigFailoverConfig">EventsEndpointRoutingConfigFailoverConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsEndpointRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsEndpoint.EventsEndpointRoutingConfig">EventsEndpointRoutingConfig</a>

---



