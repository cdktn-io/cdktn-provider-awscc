# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktn/provider-awscc.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile awscc_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_outbound_queue_arn: str,
  description: str,
  instance_arn: str,
  media_concurrencies: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies],
  name: str,
  agent_availability_timer: str = None,
  manual_assignment_queue_configs: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs] = None,
  queue_configs: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs] = None,
  tags: IResolvable | typing.List[ConnectRoutingProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueArn">default_outbound_queue_arn</a></code> | <code>str</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies">media_concurrencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]</code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.agentAvailabilityTimer">agent_availability_timer</a></code> | <code>str</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.manualAssignmentQueueConfigs">manual_assignment_queue_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]</code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs">queue_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]</code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_outbound_queue_arn`<sup>Required</sup> <a name="default_outbound_queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueArn"></a>

- *Type:* str

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description"></a>

- *Type:* str

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name"></a>

- *Type:* str

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `agent_availability_timer`<sup>Optional</sup> <a name="agent_availability_timer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.agentAvailabilityTimer"></a>

- *Type:* str

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `manual_assignment_queue_configs`<sup>Optional</sup> <a name="manual_assignment_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.manualAssignmentQueueConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `queue_configs`<sup>Optional</sup> <a name="queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs">put_manual_assignment_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">put_media_concurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">put_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer">reset_agent_availability_timer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs">reset_manual_assignment_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">reset_queue_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_manual_assignment_queue_configs` <a name="put_manual_assignment_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs"></a>

```python
def put_manual_assignment_queue_configs(
  value: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]

---

##### `put_media_concurrencies` <a name="put_media_concurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```python
def put_media_concurrencies(
  value: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]

---

##### `put_queue_configs` <a name="put_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```python
def put_queue_configs(
  value: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectRoutingProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]

---

##### `reset_agent_availability_timer` <a name="reset_agent_availability_timer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer"></a>

```python
def reset_agent_availability_timer() -> None
```

##### `reset_manual_assignment_queue_configs` <a name="reset_manual_assignment_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs"></a>

```python
def reset_manual_assignment_queue_configs() -> None
```

##### `reset_queue_configs` <a name="reset_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```python
def reset_queue_configs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectRoutingProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectRoutingProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectRoutingProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs">manual_assignment_queue_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">media_concurrencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queue_configs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn">routing_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput">agent_availability_timer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput">default_outbound_queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput">manual_assignment_queue_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">media_concurrencies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queue_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer">agent_availability_timer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn">default_outbound_queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manual_assignment_queue_configs`<sup>Required</sup> <a name="manual_assignment_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs"></a>

```python
manual_assignment_queue_configs: ConnectRoutingProfileManualAssignmentQueueConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a>

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```python
media_concurrencies: ConnectRoutingProfileMediaConcurrenciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queue_configs`<sup>Required</sup> <a name="queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```python
queue_configs: ConnectRoutingProfileQueueConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `routing_profile_arn`<sup>Required</sup> <a name="routing_profile_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn"></a>

```python
routing_profile_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```python
tags: ConnectRoutingProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a>

---

##### `agent_availability_timer_input`<sup>Optional</sup> <a name="agent_availability_timer_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput"></a>

```python
agent_availability_timer_input: str
```

- *Type:* str

---

##### `default_outbound_queue_arn_input`<sup>Optional</sup> <a name="default_outbound_queue_arn_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput"></a>

```python
default_outbound_queue_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `manual_assignment_queue_configs_input`<sup>Optional</sup> <a name="manual_assignment_queue_configs_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput"></a>

```python
manual_assignment_queue_configs_input: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]

---

##### `media_concurrencies_input`<sup>Optional</sup> <a name="media_concurrencies_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```python
media_concurrencies_input: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queue_configs_input`<sup>Optional</sup> <a name="queue_configs_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```python
queue_configs_input: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectRoutingProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]

---

##### `agent_availability_timer`<sup>Required</sup> <a name="agent_availability_timer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer"></a>

```python
agent_availability_timer: str
```

- *Type:* str

---

##### `default_outbound_queue_arn`<sup>Required</sup> <a name="default_outbound_queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn"></a>

```python
default_outbound_queue_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_outbound_queue_arn: str,
  description: str,
  instance_arn: str,
  media_concurrencies: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies],
  name: str,
  agent_availability_timer: str = None,
  manual_assignment_queue_configs: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs] = None,
  queue_configs: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs] = None,
  tags: IResolvable | typing.List[ConnectRoutingProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn">default_outbound_queue_arn</a></code> | <code>str</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>str</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">media_concurrencies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]</code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>str</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer">agent_availability_timer</a></code> | <code>str</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs">manual_assignment_queue_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]</code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queue_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]</code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_outbound_queue_arn`<sup>Required</sup> <a name="default_outbound_queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn"></a>

```python
default_outbound_queue_arn: str
```

- *Type:* str

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `media_concurrencies`<sup>Required</sup> <a name="media_concurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```python
media_concurrencies: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `agent_availability_timer`<sup>Optional</sup> <a name="agent_availability_timer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer"></a>

```python
agent_availability_timer: str
```

- *Type:* str

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `manual_assignment_queue_configs`<sup>Optional</sup> <a name="manual_assignment_queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs"></a>

```python
manual_assignment_queue_configs: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `queue_configs`<sup>Optional</sup> <a name="queue_configs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```python
queue_configs: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectRoutingProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

### ConnectRoutingProfileManualAssignmentQueueConfigs <a name="ConnectRoutingProfileManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs(
  queue_reference: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference">queue_reference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `queue_reference`<sup>Optional</sup> <a name="queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference"></a>

```python
queue_reference: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference(
  channel: str = None,
  queue_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn">queue_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queue_arn`<sup>Optional</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies(
  channel: str,
  concurrency: typing.Union[int, float],
  cross_channel_behavior: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | The number of contacts an agent can have on a channel simultaneously. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior">cross_channel_behavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of contacts an agent can have on a channel simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}

---

##### `cross_channel_behavior`<sup>Optional</sup> <a name="cross_channel_behavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior"></a>

```python
cross_channel_behavior: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#cross_channel_behavior ConnectRoutingProfile#cross_channel_behavior}

---

### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior(
  behavior_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType">behavior_type</a></code> | <code>str</code> | Specifies the other channels that can be routed to an agent handling their current channel. |

---

##### `behavior_type`<sup>Optional</sup> <a name="behavior_type" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType"></a>

```python
behavior_type: str
```

- *Type:* str

Specifies the other channels that can be routed to an agent handling their current channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#behavior_type ConnectRoutingProfile#behavior_type}

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigs(
  delay: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  queue_reference: ConnectRoutingProfileQueueConfigsQueueReference = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | The delay, in seconds, a contact should wait in the queue before they are routed to an available agent. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The order in which contacts are to be handled for the queue. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference">queue_reference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#delay ConnectRoutingProfile#delay}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order in which contacts are to be handled for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#priority ConnectRoutingProfile#priority}

---

##### `queue_reference`<sup>Optional</sup> <a name="queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference"></a>

```python
queue_reference: ConnectRoutingProfileQueueConfigsQueueReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileQueueConfigsQueueReference <a name="ConnectRoutingProfileQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference(
  channel: str = None,
  queue_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel">channel</a></code> | <code>str</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn">queue_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queue_arn`<sup>Optional</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileTags <a name="ConnectRoutingProfileTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#key ConnectRoutingProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#value ConnectRoutingProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileManualAssignmentQueueConfigsList <a name="ConnectRoutingProfileManualAssignmentQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectRoutingProfileManualAssignmentQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>]

---


### ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference">put_queue_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference">reset_queue_reference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_queue_reference` <a name="put_queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference"></a>

```python
def put_queue_reference(
  channel: str = None,
  queue_arn: str = None
) -> None
```

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference.parameter.channel"></a>

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

###### `queue_arn`<sup>Optional</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference.parameter.queueArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

##### `reset_queue_reference` <a name="reset_queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference"></a>

```python
def reset_queue_reference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference">queue_reference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput">queue_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `queue_reference`<sup>Required</sup> <a name="queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference"></a>

```python
queue_reference: ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a>

---

##### `queue_reference_input`<sup>Optional</sup> <a name="queue_reference_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput"></a>

```python
queue_reference_input: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>

---


### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn">reset_queue_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_queue_arn` <a name="reset_queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```python
def reset_queue_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `queue_arn_input`<sup>Optional</sup> <a name="queue_arn_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```python
queue_arn_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType">reset_behavior_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior_type` <a name="reset_behavior_type" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType"></a>

```python
def reset_behavior_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput">behavior_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType">behavior_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_type_input`<sup>Optional</sup> <a name="behavior_type_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput"></a>

```python
behavior_type_input: str
```

- *Type:* str

---

##### `behavior_type`<sup>Required</sup> <a name="behavior_type" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType"></a>

```python
behavior_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---


### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectRoutingProfileMediaConcurrencies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>]

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior">put_cross_channel_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior">reset_cross_channel_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cross_channel_behavior` <a name="put_cross_channel_behavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior"></a>

```python
def put_cross_channel_behavior(
  behavior_type: str = None
) -> None
```

###### `behavior_type`<sup>Optional</sup> <a name="behavior_type" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior.parameter.behaviorType"></a>

- *Type:* str

Specifies the other channels that can be routed to an agent handling their current channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#behavior_type ConnectRoutingProfile#behavior_type}

---

##### `reset_cross_channel_behavior` <a name="reset_cross_channel_behavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior"></a>

```python
def reset_cross_channel_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior">cross_channel_behavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput">cross_channel_behavior_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_channel_behavior`<sup>Required</sup> <a name="cross_channel_behavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior"></a>

```python
cross_channel_behavior: ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a>

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `concurrency_input`<sup>Optional</sup> <a name="concurrency_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```python
concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cross_channel_behavior_input`<sup>Optional</sup> <a name="cross_channel_behavior_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput"></a>

```python
cross_channel_behavior_input: IResolvable | ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```python
concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileMediaConcurrencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectRoutingProfileQueueConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>]

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference">put_queue_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference">reset_queue_reference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_queue_reference` <a name="put_queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference"></a>

```python
def put_queue_reference(
  channel: str = None,
  queue_arn: str = None
) -> None
```

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference.parameter.channel"></a>

- *Type:* str

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

###### `queue_arn`<sup>Optional</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference.parameter.queueArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

##### `reset_delay` <a name="reset_delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_queue_reference` <a name="reset_queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference"></a>

```python
def reset_queue_reference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference">queue_reference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput">queue_reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `queue_reference`<sup>Required</sup> <a name="queue_reference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference"></a>

```python
queue_reference: ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a>

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```python
delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_reference_input`<sup>Optional</sup> <a name="queue_reference_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput"></a>

```python
queue_reference_input: IResolvable | ConnectRoutingProfileQueueConfigsQueueReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileQueueConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>

---


### ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn">reset_queue_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_queue_arn` <a name="reset_queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```python
def reset_queue_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queue_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn">queue_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `queue_arn_input`<sup>Optional</sup> <a name="queue_arn_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```python
queue_arn_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `queue_arn`<sup>Required</sup> <a name="queue_arn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```python
queue_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileQueueConfigsQueueReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileTagsList <a name="ConnectRoutingProfileTagsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectRoutingProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectRoutingProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>]

---


### ConnectRoutingProfileTagsOutputReference <a name="ConnectRoutingProfileTagsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_routing_profile

connectRoutingProfile.ConnectRoutingProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectRoutingProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>

---



