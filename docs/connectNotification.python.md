# `connectNotification` Submodule <a name="`connectNotification` Submodule" id="@cdktn/provider-awscc.connectNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectNotification <a name="ConnectNotification" id="@cdktn/provider-awscc.connectNotification.ConnectNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification awscc_connect_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotification(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: ConnectNotificationContent,
  instance_arn: str,
  expires_at: str = None,
  priority: str = None,
  recipients: typing.List[str] = None,
  tags: IResolvable | typing.List[ConnectNotificationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.priority">priority</a></code> | <code>str</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.recipients">recipients</a></code> | <code>typing.List[str]</code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.expiresAt"></a>

- *Type:* str

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.priority"></a>

- *Type:* str

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.recipients"></a>

- *Type:* typing.List[str]

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients">reset_recipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent"></a>

```python
def put_content(
  de_de: str = None,
  en_us: str = None,
  es_es: str = None,
  fr_fr: str = None,
  id_id: str = None,
  it_it: str = None,
  ja_jp: str = None,
  ko_kr: str = None,
  pt_br: str = None,
  zh_cn: str = None,
  zh_tw: str = None
) -> None
```

###### `de_de`<sup>Optional</sup> <a name="de_de" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.deDe"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

###### `en_us`<sup>Optional</sup> <a name="en_us" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.enUs"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

###### `es_es`<sup>Optional</sup> <a name="es_es" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.esEs"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

###### `fr_fr`<sup>Optional</sup> <a name="fr_fr" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.frFr"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

###### `id_id`<sup>Optional</sup> <a name="id_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.idId"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

###### `it_it`<sup>Optional</sup> <a name="it_it" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.itIt"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

###### `ja_jp`<sup>Optional</sup> <a name="ja_jp" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.jaJp"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

###### `ko_kr`<sup>Optional</sup> <a name="ko_kr" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.koKr"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

###### `pt_br`<sup>Optional</sup> <a name="pt_br" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.ptBr"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

###### `zh_cn`<sup>Optional</sup> <a name="zh_cn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.zhCn"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

###### `zh_tw`<sup>Optional</sup> <a name="zh_tw" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putContent.parameter.zhTw"></a>

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectNotificationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetRecipients"></a>

```python
def reset_recipients() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectNotification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId">notification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.content"></a>

```python
content: ConnectNotificationContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference">ConnectNotificationContentOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_id`<sup>Required</sup> <a name="notification_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.notificationId"></a>

```python
notification_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tags"></a>

```python
tags: ConnectNotificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList">ConnectNotificationTagsList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.contentInput"></a>

```python
content_input: IResolvable | ConnectNotificationContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectNotificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectNotification.ConnectNotification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectNotificationConfig <a name="ConnectNotificationConfig" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: ConnectNotificationContent,
  instance_arn: str,
  expires_at: str = None,
  priority: str = None,
  recipients: typing.List[str] = None,
  tags: IResolvable | typing.List[ConnectNotificationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | The content of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The time a notification will expire. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority">priority</a></code> | <code>str</code> | The priority of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | The recipients of the notification. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.content"></a>

```python
content: ConnectNotificationContent
```

- *Type:* <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

The content of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#content ConnectNotification#content}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#instance_arn ConnectNotification#instance_arn}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The time a notification will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#expires_at ConnectNotification#expires_at}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

The priority of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#priority ConnectNotification#priority}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

The recipients of the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#recipients ConnectNotification#recipients}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectNotificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#tags ConnectNotification#tags}

---

### ConnectNotificationContent <a name="ConnectNotificationContent" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationContent(
  de_de: str = None,
  en_us: str = None,
  es_es: str = None,
  fr_fr: str = None,
  id_id: str = None,
  it_it: str = None,
  ja_jp: str = None,
  ko_kr: str = None,
  pt_br: str = None,
  zh_cn: str = None,
  zh_tw: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe">de_de</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs">en_us</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs">es_es</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr">fr_fr</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId">id_id</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt">it_it</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp">ja_jp</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr">ko_kr</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr">pt_br</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn">zh_cn</a></code> | <code>str</code> | Localized notification content. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw">zh_tw</a></code> | <code>str</code> | Localized notification content. |

---

##### `de_de`<sup>Optional</sup> <a name="de_de" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.deDe"></a>

```python
de_de: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#de_de ConnectNotification#de_de}

---

##### `en_us`<sup>Optional</sup> <a name="en_us" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.enUs"></a>

```python
en_us: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#en_us ConnectNotification#en_us}

---

##### `es_es`<sup>Optional</sup> <a name="es_es" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.esEs"></a>

```python
es_es: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#es_es ConnectNotification#es_es}

---

##### `fr_fr`<sup>Optional</sup> <a name="fr_fr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.frFr"></a>

```python
fr_fr: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#fr_fr ConnectNotification#fr_fr}

---

##### `id_id`<sup>Optional</sup> <a name="id_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.idId"></a>

```python
id_id: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#id_id ConnectNotification#id_id}

---

##### `it_it`<sup>Optional</sup> <a name="it_it" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.itIt"></a>

```python
it_it: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#it_it ConnectNotification#it_it}

---

##### `ja_jp`<sup>Optional</sup> <a name="ja_jp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.jaJp"></a>

```python
ja_jp: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#ja_jp ConnectNotification#ja_jp}

---

##### `ko_kr`<sup>Optional</sup> <a name="ko_kr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.koKr"></a>

```python
ko_kr: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#ko_kr ConnectNotification#ko_kr}

---

##### `pt_br`<sup>Optional</sup> <a name="pt_br" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.ptBr"></a>

```python
pt_br: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#pt_br ConnectNotification#pt_br}

---

##### `zh_cn`<sup>Optional</sup> <a name="zh_cn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhCn"></a>

```python
zh_cn: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#zh_cn ConnectNotification#zh_cn}

---

##### `zh_tw`<sup>Optional</sup> <a name="zh_tw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContent.property.zhTw"></a>

```python
zh_tw: str
```

- *Type:* str

Localized notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#zh_tw ConnectNotification#zh_tw}

---

### ConnectNotificationTags <a name="ConnectNotificationTags" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#key ConnectNotification#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_notification#value ConnectNotification#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectNotificationContentOutputReference <a name="ConnectNotificationContentOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe">reset_de_de</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs">reset_en_us</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs">reset_es_es</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr">reset_fr_fr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId">reset_id_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt">reset_it_it</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp">reset_ja_jp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr">reset_ko_kr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr">reset_pt_br</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn">reset_zh_cn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw">reset_zh_tw</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_de_de` <a name="reset_de_de" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetDeDe"></a>

```python
def reset_de_de() -> None
```

##### `reset_en_us` <a name="reset_en_us" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEnUs"></a>

```python
def reset_en_us() -> None
```

##### `reset_es_es` <a name="reset_es_es" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetEsEs"></a>

```python
def reset_es_es() -> None
```

##### `reset_fr_fr` <a name="reset_fr_fr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetFrFr"></a>

```python
def reset_fr_fr() -> None
```

##### `reset_id_id` <a name="reset_id_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetIdId"></a>

```python
def reset_id_id() -> None
```

##### `reset_it_it` <a name="reset_it_it" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetItIt"></a>

```python
def reset_it_it() -> None
```

##### `reset_ja_jp` <a name="reset_ja_jp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetJaJp"></a>

```python
def reset_ja_jp() -> None
```

##### `reset_ko_kr` <a name="reset_ko_kr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetKoKr"></a>

```python
def reset_ko_kr() -> None
```

##### `reset_pt_br` <a name="reset_pt_br" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetPtBr"></a>

```python
def reset_pt_br() -> None
```

##### `reset_zh_cn` <a name="reset_zh_cn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhCn"></a>

```python
def reset_zh_cn() -> None
```

##### `reset_zh_tw` <a name="reset_zh_tw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.resetZhTw"></a>

```python
def reset_zh_tw() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput">de_de_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput">en_us_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput">es_es_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput">fr_fr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput">id_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput">it_it_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput">ja_jp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput">ko_kr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput">pt_br_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput">zh_cn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput">zh_tw_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe">de_de</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs">en_us</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs">es_es</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr">fr_fr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId">id_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt">it_it</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp">ja_jp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr">ko_kr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr">pt_br</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn">zh_cn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw">zh_tw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `de_de_input`<sup>Optional</sup> <a name="de_de_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDeInput"></a>

```python
de_de_input: str
```

- *Type:* str

---

##### `en_us_input`<sup>Optional</sup> <a name="en_us_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUsInput"></a>

```python
en_us_input: str
```

- *Type:* str

---

##### `es_es_input`<sup>Optional</sup> <a name="es_es_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEsInput"></a>

```python
es_es_input: str
```

- *Type:* str

---

##### `fr_fr_input`<sup>Optional</sup> <a name="fr_fr_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFrInput"></a>

```python
fr_fr_input: str
```

- *Type:* str

---

##### `id_id_input`<sup>Optional</sup> <a name="id_id_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idIdInput"></a>

```python
id_id_input: str
```

- *Type:* str

---

##### `it_it_input`<sup>Optional</sup> <a name="it_it_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itItInput"></a>

```python
it_it_input: str
```

- *Type:* str

---

##### `ja_jp_input`<sup>Optional</sup> <a name="ja_jp_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJpInput"></a>

```python
ja_jp_input: str
```

- *Type:* str

---

##### `ko_kr_input`<sup>Optional</sup> <a name="ko_kr_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKrInput"></a>

```python
ko_kr_input: str
```

- *Type:* str

---

##### `pt_br_input`<sup>Optional</sup> <a name="pt_br_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBrInput"></a>

```python
pt_br_input: str
```

- *Type:* str

---

##### `zh_cn_input`<sup>Optional</sup> <a name="zh_cn_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCnInput"></a>

```python
zh_cn_input: str
```

- *Type:* str

---

##### `zh_tw_input`<sup>Optional</sup> <a name="zh_tw_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTwInput"></a>

```python
zh_tw_input: str
```

- *Type:* str

---

##### `de_de`<sup>Required</sup> <a name="de_de" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.deDe"></a>

```python
de_de: str
```

- *Type:* str

---

##### `en_us`<sup>Required</sup> <a name="en_us" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.enUs"></a>

```python
en_us: str
```

- *Type:* str

---

##### `es_es`<sup>Required</sup> <a name="es_es" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.esEs"></a>

```python
es_es: str
```

- *Type:* str

---

##### `fr_fr`<sup>Required</sup> <a name="fr_fr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.frFr"></a>

```python
fr_fr: str
```

- *Type:* str

---

##### `id_id`<sup>Required</sup> <a name="id_id" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.idId"></a>

```python
id_id: str
```

- *Type:* str

---

##### `it_it`<sup>Required</sup> <a name="it_it" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.itIt"></a>

```python
it_it: str
```

- *Type:* str

---

##### `ja_jp`<sup>Required</sup> <a name="ja_jp" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.jaJp"></a>

```python
ja_jp: str
```

- *Type:* str

---

##### `ko_kr`<sup>Required</sup> <a name="ko_kr" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.koKr"></a>

```python
ko_kr: str
```

- *Type:* str

---

##### `pt_br`<sup>Required</sup> <a name="pt_br" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.ptBr"></a>

```python
pt_br: str
```

- *Type:* str

---

##### `zh_cn`<sup>Required</sup> <a name="zh_cn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhCn"></a>

```python
zh_cn: str
```

- *Type:* str

---

##### `zh_tw`<sup>Required</sup> <a name="zh_tw" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.zhTw"></a>

```python
zh_tw: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectNotificationContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationContent">ConnectNotificationContent</a>

---


### ConnectNotificationTagsList <a name="ConnectNotificationTagsList" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectNotificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectNotificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>]

---


### ConnectNotificationTagsOutputReference <a name="ConnectNotificationTagsOutputReference" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_notification

connectNotification.ConnectNotificationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectNotification.ConnectNotificationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectNotificationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectNotification.ConnectNotificationTags">ConnectNotificationTags</a>

---



