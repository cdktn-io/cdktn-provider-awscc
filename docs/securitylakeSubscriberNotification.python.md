# `securitylakeSubscriberNotification` Submodule <a name="`securitylakeSubscriberNotification` Submodule" id="@cdktn/provider-awscc.securitylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriberNotification <a name="SecuritylakeSubscriberNotification" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotification(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notification_configuration: SecuritylakeSubscriberNotificationNotificationConfiguration,
  subscriber_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.subscriberArn">subscriber_arn</a></code> | <code>str</code> | The ARN for the subscriber. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notification_configuration`<sup>Required</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.notificationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}.

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.subscriberArn"></a>

- *Type:* str

The ARN for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#subscriber_arn SecuritylakeSubscriberNotification#subscriber_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration">put_notification_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_configuration` <a name="put_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration"></a>

```python
def put_notification_configuration(
  https_notification_configuration: SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration = None,
  sqs_notification_configuration: str = None
) -> None
```

###### `https_notification_configuration`<sup>Optional</sup> <a name="https_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration.parameter.httpsNotificationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

The configuration for HTTPS subscriber notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

###### `sqs_notification_configuration`<sup>Optional</sup> <a name="sqs_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration.parameter.sqsNotificationConfiguration"></a>

- *Type:* str

The configurations for SQS subscriber notification. The members of this structure are context-dependent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecuritylakeSubscriberNotification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint">subscriber_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput">notification_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput">subscriber_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn">subscriber_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_configuration`<sup>Required</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration"></a>

```python
notification_configuration: SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a>

---

##### `subscriber_endpoint`<sup>Required</sup> <a name="subscriber_endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```python
subscriber_endpoint: str
```

- *Type:* str

---

##### `notification_configuration_input`<sup>Optional</sup> <a name="notification_configuration_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput"></a>

```python
notification_configuration_input: IResolvable | SecuritylakeSubscriberNotificationNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---

##### `subscriber_arn_input`<sup>Optional</sup> <a name="subscriber_arn_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput"></a>

```python
subscriber_arn_input: str
```

- *Type:* str

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn"></a>

```python
subscriber_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberNotificationConfig <a name="SecuritylakeSubscriberNotificationConfig" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notification_configuration: SecuritylakeSubscriberNotificationNotificationConfiguration,
  subscriber_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn">subscriber_arn</a></code> | <code>str</code> | The ARN for the subscriber. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notification_configuration`<sup>Required</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration"></a>

```python
notification_configuration: SecuritylakeSubscriberNotificationNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}.

---

##### `subscriber_arn`<sup>Required</sup> <a name="subscriber_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn"></a>

```python
subscriber_arn: str
```

- *Type:* str

The ARN for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#subscriber_arn SecuritylakeSubscriberNotification#subscriber_arn}

---

### SecuritylakeSubscriberNotificationNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration(
  https_notification_configuration: SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration = None,
  sqs_notification_configuration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration">https_notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | The configuration for HTTPS subscriber notification. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration">sqs_notification_configuration</a></code> | <code>str</code> | The configurations for SQS subscriber notification. The members of this structure are context-dependent. |

---

##### `https_notification_configuration`<sup>Optional</sup> <a name="https_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration"></a>

```python
https_notification_configuration: SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

The configuration for HTTPS subscriber notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

##### `sqs_notification_configuration`<sup>Optional</sup> <a name="sqs_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration"></a>

```python
sqs_notification_configuration: str
```

- *Type:* str

The configurations for SQS subscriber notification. The members of this structure are context-dependent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration(
  authorization_api_key_name: str = None,
  authorization_api_key_value: str = None,
  endpoint: str = None,
  http_method: str = None,
  target_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName">authorization_api_key_name</a></code> | <code>str</code> | The key name for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue">authorization_api_key_value</a></code> | <code>str</code> | The key value for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint">endpoint</a></code> | <code>str</code> | The subscription endpoint in Security Lake. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod">http_method</a></code> | <code>str</code> | The HTTPS method used for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. |

---

##### `authorization_api_key_name`<sup>Optional</sup> <a name="authorization_api_key_name" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName"></a>

```python
authorization_api_key_name: str
```

- *Type:* str

The key name for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}

---

##### `authorization_api_key_value`<sup>Optional</sup> <a name="authorization_api_key_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue"></a>

```python
authorization_api_key_value: str
```

- *Type:* str

The key value for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The subscription endpoint in Security Lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

The HTTPS method used for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}

---

##### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName">reset_authorization_api_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue">reset_authorization_api_key_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn">reset_target_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_api_key_name` <a name="reset_authorization_api_key_name" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName"></a>

```python
def reset_authorization_api_key_name() -> None
```

##### `reset_authorization_api_key_value` <a name="reset_authorization_api_key_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue"></a>

```python
def reset_authorization_api_key_value() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_target_role_arn` <a name="reset_target_role_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn"></a>

```python
def reset_target_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput">authorization_api_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput">authorization_api_key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput">target_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">authorization_api_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">authorization_api_key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_api_key_name_input`<sup>Optional</sup> <a name="authorization_api_key_name_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput"></a>

```python
authorization_api_key_name_input: str
```

- *Type:* str

---

##### `authorization_api_key_value_input`<sup>Optional</sup> <a name="authorization_api_key_value_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput"></a>

```python
authorization_api_key_value_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `target_role_arn_input`<sup>Optional</sup> <a name="target_role_arn_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput"></a>

```python
target_role_arn_input: str
```

- *Type:* str

---

##### `authorization_api_key_name`<sup>Required</sup> <a name="authorization_api_key_name" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```python
authorization_api_key_name: str
```

- *Type:* str

---

##### `authorization_api_key_value`<sup>Required</sup> <a name="authorization_api_key_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```python
authorization_api_key_value: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `target_role_arn`<sup>Required</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---


### SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securitylake_subscriber_notification

securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration">put_https_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration">reset_https_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration">reset_sqs_notification_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_https_notification_configuration` <a name="put_https_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration"></a>

```python
def put_https_notification_configuration(
  authorization_api_key_name: str = None,
  authorization_api_key_value: str = None,
  endpoint: str = None,
  http_method: str = None,
  target_role_arn: str = None
) -> None
```

###### `authorization_api_key_name`<sup>Optional</sup> <a name="authorization_api_key_name" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.authorizationApiKeyName"></a>

- *Type:* str

The key name for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}

---

###### `authorization_api_key_value`<sup>Optional</sup> <a name="authorization_api_key_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.authorizationApiKeyValue"></a>

- *Type:* str

The key value for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.endpoint"></a>

- *Type:* str

The subscription endpoint in Security Lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}

---

###### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.httpMethod"></a>

- *Type:* str

The HTTPS method used for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}

---

###### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.targetRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}

---

##### `reset_https_notification_configuration` <a name="reset_https_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration"></a>

```python
def reset_https_notification_configuration() -> None
```

##### `reset_sqs_notification_configuration` <a name="reset_sqs_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration"></a>

```python
def reset_sqs_notification_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">https_notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput">https_notification_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput">sqs_notification_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">sqs_notification_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `https_notification_configuration`<sup>Required</sup> <a name="https_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```python
https_notification_configuration: SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a>

---

##### `https_notification_configuration_input`<sup>Optional</sup> <a name="https_notification_configuration_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput"></a>

```python
https_notification_configuration_input: IResolvable | SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---

##### `sqs_notification_configuration_input`<sup>Optional</sup> <a name="sqs_notification_configuration_input" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput"></a>

```python
sqs_notification_configuration_input: str
```

- *Type:* str

---

##### `sqs_notification_configuration`<sup>Required</sup> <a name="sqs_notification_configuration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```python
sqs_notification_configuration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecuritylakeSubscriberNotificationNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---



