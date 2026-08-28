# `autoscalingLifecycleHook` Submodule <a name="`autoscalingLifecycleHook` Submodule" id="@cdktn/provider-awscc.autoscalingLifecycleHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLifecycleHook <a name="AutoscalingLifecycleHook" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_group_name: str,
  lifecycle_transition: str,
  default_result: str = None,
  heartbeat_timeout: typing.Union[int, float] = None,
  lifecycle_hook_name: str = None,
  notification_metadata: str = None,
  notification_target_arn: str = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | The name of the Auto Scaling group for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | The instance state to which you want to attach the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult">default_result</a></code> | <code>str</code> | The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that can elapse before the lifecycle hook times out. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleHookName">lifecycle_hook_name</a></code> | <code>str</code> | The name of the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.autoScalingGroupName"></a>

- *Type:* str

The name of the Auto Scaling group for the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#auto_scaling_group_name AutoscalingLifecycleHook#auto_scaling_group_name}

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleTransition"></a>

- *Type:* str

The instance state to which you want to attach the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.defaultResult"></a>

- *Type:* str

The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.

The valid values are CONTINUE and ABANDON (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}

---

##### `heartbeat_timeout`<sup>Optional</sup> <a name="heartbeat_timeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.heartbeatTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that can elapse before the lifecycle hook times out.

The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}

---

##### `lifecycle_hook_name`<sup>Optional</sup> <a name="lifecycle_hook_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.lifecycleHookName"></a>

- *Type:* str

The name of the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_hook_name AutoscalingLifecycleHook#lifecycle_hook_name}

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationMetadata"></a>

- *Type:* str

Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}

---

##### `notification_target_arn`<sup>Optional</sup> <a name="notification_target_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.notificationTargetArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook.

You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult">reset_default_result</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout">reset_heartbeat_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName">reset_lifecycle_hook_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata">reset_notification_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn">reset_notification_target_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_result` <a name="reset_default_result" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetDefaultResult"></a>

```python
def reset_default_result() -> None
```

##### `reset_heartbeat_timeout` <a name="reset_heartbeat_timeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetHeartbeatTimeout"></a>

```python
def reset_heartbeat_timeout() -> None
```

##### `reset_lifecycle_hook_name` <a name="reset_lifecycle_hook_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetLifecycleHookName"></a>

```python
def reset_lifecycle_hook_name() -> None
```

##### `reset_notification_metadata` <a name="reset_notification_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationMetadata"></a>

```python
def reset_notification_metadata() -> None
```

##### `reset_notification_target_arn` <a name="reset_notification_target_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetNotificationTargetArn"></a>

```python
def reset_notification_target_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingLifecycleHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingLifecycleHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLifecycleHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput">auto_scaling_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput">default_result_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput">heartbeat_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput">lifecycle_hook_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput">lifecycle_transition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput">notification_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput">notification_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult">default_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName">lifecycle_hook_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `auto_scaling_group_name_input`<sup>Optional</sup> <a name="auto_scaling_group_name_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupNameInput"></a>

```python
auto_scaling_group_name_input: str
```

- *Type:* str

---

##### `default_result_input`<sup>Optional</sup> <a name="default_result_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResultInput"></a>

```python
default_result_input: str
```

- *Type:* str

---

##### `heartbeat_timeout_input`<sup>Optional</sup> <a name="heartbeat_timeout_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeoutInput"></a>

```python
heartbeat_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_hook_name_input`<sup>Optional</sup> <a name="lifecycle_hook_name_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookNameInput"></a>

```python
lifecycle_hook_name_input: str
```

- *Type:* str

---

##### `lifecycle_transition_input`<sup>Optional</sup> <a name="lifecycle_transition_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransitionInput"></a>

```python
lifecycle_transition_input: str
```

- *Type:* str

---

##### `notification_metadata_input`<sup>Optional</sup> <a name="notification_metadata_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadataInput"></a>

```python
notification_metadata_input: str
```

- *Type:* str

---

##### `notification_target_arn_input`<sup>Optional</sup> <a name="notification_target_arn_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArnInput"></a>

```python
notification_target_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

---

##### `default_result`<sup>Required</sup> <a name="default_result" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

---

##### `heartbeat_timeout`<sup>Required</sup> <a name="heartbeat_timeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.heartbeatTimeout"></a>

```python
heartbeat_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_hook_name`<sup>Required</sup> <a name="lifecycle_hook_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleHookName"></a>

```python
lifecycle_hook_name: str
```

- *Type:* str

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.lifecycleTransition"></a>

```python
lifecycle_transition: str
```

- *Type:* str

---

##### `notification_metadata`<sup>Required</sup> <a name="notification_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

---

##### `notification_target_arn`<sup>Required</sup> <a name="notification_target_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.notificationTargetArn"></a>

```python
notification_target_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLifecycleHookConfig <a name="AutoscalingLifecycleHookConfig" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import autoscaling_lifecycle_hook

autoscalingLifecycleHook.AutoscalingLifecycleHookConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_scaling_group_name: str,
  lifecycle_transition: str,
  default_result: str = None,
  heartbeat_timeout: typing.Union[int, float] = None,
  lifecycle_hook_name: str = None,
  notification_metadata: str = None,
  notification_target_arn: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | The name of the Auto Scaling group for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition">lifecycle_transition</a></code> | <code>str</code> | The instance state to which you want to attach the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult">default_result</a></code> | <code>str</code> | The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout">heartbeat_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, that can elapse before the lifecycle hook times out. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName">lifecycle_hook_name</a></code> | <code>str</code> | The name of the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata">notification_metadata</a></code> | <code>str</code> | Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn">notification_target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

The name of the Auto Scaling group for the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#auto_scaling_group_name AutoscalingLifecycleHook#auto_scaling_group_name}

---

##### `lifecycle_transition`<sup>Required</sup> <a name="lifecycle_transition" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleTransition"></a>

```python
lifecycle_transition: str
```

- *Type:* str

The instance state to which you want to attach the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}

---

##### `default_result`<sup>Optional</sup> <a name="default_result" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.defaultResult"></a>

```python
default_result: str
```

- *Type:* str

The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.

The valid values are CONTINUE and ABANDON (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#default_result AutoscalingLifecycleHook#default_result}

---

##### `heartbeat_timeout`<sup>Optional</sup> <a name="heartbeat_timeout" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.heartbeatTimeout"></a>

```python
heartbeat_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, that can elapse before the lifecycle hook times out.

The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}

---

##### `lifecycle_hook_name`<sup>Optional</sup> <a name="lifecycle_hook_name" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.lifecycleHookName"></a>

```python
lifecycle_hook_name: str
```

- *Type:* str

The name of the lifecycle hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#lifecycle_hook_name AutoscalingLifecycleHook#lifecycle_hook_name}

---

##### `notification_metadata`<sup>Optional</sup> <a name="notification_metadata" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationMetadata"></a>

```python
notification_metadata: str
```

- *Type:* str

Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_metadata AutoscalingLifecycleHook#notification_metadata}

---

##### `notification_target_arn`<sup>Optional</sup> <a name="notification_target_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.notificationTargetArn"></a>

```python
notification_target_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook.

You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.autoscalingLifecycleHook.AutoscalingLifecycleHookConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/autoscaling_lifecycle_hook#role_arn AutoscalingLifecycleHook#role_arn}

---



