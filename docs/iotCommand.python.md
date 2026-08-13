# `iotCommand` Submodule <a name="`iotCommand` Submodule" id="@cdktn/provider-awscc.iotCommand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCommand <a name="IotCommand" id="@cdktn/provider-awscc.iotCommand.IotCommand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command awscc_iot_command}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommand(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command_id: str,
  created_at: str = None,
  deprecated: bool | IResolvable = None,
  description: str = None,
  display_name: str = None,
  last_updated_at: str = None,
  mandatory_parameters: IResolvable | typing.List[IotCommandMandatoryParameters] = None,
  namespace: str = None,
  payload: IotCommandPayload = None,
  payload_template: str = None,
  pending_deletion: bool | IResolvable = None,
  preprocessor: IotCommandPreprocessor = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[IotCommandTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.commandId">command_id</a></code> | <code>str</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.deprecated">deprecated</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.mandatoryParameters">mandatory_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]</code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payloadTemplate">payload_template</a></code> | <code>str</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.pendingDeletion">pending_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]</code> | The tags to be associated with the command. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command_id`<sup>Required</sup> <a name="command_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.commandId"></a>

- *Type:* str

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.createdAt"></a>

- *Type:* str

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.deprecated"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.description"></a>

- *Type:* str

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `last_updated_at`<sup>Optional</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.lastUpdatedAt"></a>

- *Type:* str

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `mandatory_parameters`<sup>Optional</sup> <a name="mandatory_parameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.mandatoryParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payload"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `payload_template`<sup>Optional</sup> <a name="payload_template" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.payloadTemplate"></a>

- *Type:* str

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `pending_deletion`<sup>Optional</sup> <a name="pending_deletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.pendingDeletion"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `preprocessor`<sup>Optional</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.preprocessor"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.roleArn"></a>

- *Type:* str

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#tags IotCommand#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters">put_mandatory_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPayload">put_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor">put_preprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated">reset_deprecated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt">reset_last_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters">reset_mandatory_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate">reset_payload_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion">reset_pending_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor">reset_preprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotCommand.IotCommand.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotCommand.IotCommand.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotCommand.IotCommand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotCommand.IotCommand.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotCommand.IotCommand.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mandatory_parameters` <a name="put_mandatory_parameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters"></a>

```python
def put_mandatory_parameters(
  value: IResolvable | typing.List[IotCommandMandatoryParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putMandatoryParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]

---

##### `put_payload` <a name="put_payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload"></a>

```python
def put_payload(
  content: str = None,
  content_type: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content IotCommand#content}.

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPayload.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

##### `put_preprocessor` <a name="put_preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor"></a>

```python
def put_preprocessor(
  aws_json_substitution: IotCommandPreprocessorAwsJsonSubstitution = None
) -> None
```

###### `aws_json_substitution`<sup>Optional</sup> <a name="aws_json_substitution" id="@cdktn/provider-awscc.iotCommand.IotCommand.putPreprocessor.parameter.awsJsonSubstitution"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotCommandTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommand.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_deprecated` <a name="reset_deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDeprecated"></a>

```python
def reset_deprecated() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_last_updated_at` <a name="reset_last_updated_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetLastUpdatedAt"></a>

```python
def reset_last_updated_at() -> None
```

##### `reset_mandatory_parameters` <a name="reset_mandatory_parameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetMandatoryParameters"></a>

```python
def reset_mandatory_parameters() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_payload_template` <a name="reset_payload_template" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPayloadTemplate"></a>

```python
def reset_payload_template() -> None
```

##### `reset_pending_deletion` <a name="reset_pending_deletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPendingDeletion"></a>

```python
def reset_pending_deletion() -> None
```

##### `reset_preprocessor` <a name="reset_preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetPreprocessor"></a>

```python
def reset_preprocessor() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommand.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommand.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotCommand.IotCommand.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommand.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotCommand to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotCommand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotCommand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn">command_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters">mandatory_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput">command_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput">deprecated_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput">last_updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput">mandatory_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput">payload_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput">payload_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput">pending_deletion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput">preprocessor_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId">command_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated">deprecated</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate">payload_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion">pending_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command_arn`<sup>Required</sup> <a name="command_arn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandArn"></a>

```python
command_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory_parameters`<sup>Required</sup> <a name="mandatory_parameters" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParameters"></a>

```python
mandatory_parameters: IotCommandMandatoryParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList">IotCommandMandatoryParametersList</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payload"></a>

```python
payload: IotCommandPayloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference">IotCommandPayloadOutputReference</a>

---

##### `preprocessor`<sup>Required</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessor"></a>

```python
preprocessor: IotCommandPreprocessorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference">IotCommandPreprocessorOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tags"></a>

```python
tags: IotCommandTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList">IotCommandTagsList</a>

---

##### `command_id_input`<sup>Optional</sup> <a name="command_id_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandIdInput"></a>

```python
command_id_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `deprecated_input`<sup>Optional</sup> <a name="deprecated_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecatedInput"></a>

```python
deprecated_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `last_updated_at_input`<sup>Optional</sup> <a name="last_updated_at_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAtInput"></a>

```python
last_updated_at_input: str
```

- *Type:* str

---

##### `mandatory_parameters_input`<sup>Optional</sup> <a name="mandatory_parameters_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.mandatoryParametersInput"></a>

```python
mandatory_parameters_input: IResolvable | typing.List[IotCommandMandatoryParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadInput"></a>

```python
payload_input: IResolvable | IotCommandPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---

##### `payload_template_input`<sup>Optional</sup> <a name="payload_template_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplateInput"></a>

```python
payload_template_input: str
```

- *Type:* str

---

##### `pending_deletion_input`<sup>Optional</sup> <a name="pending_deletion_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletionInput"></a>

```python
pending_deletion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preprocessor_input`<sup>Optional</sup> <a name="preprocessor_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.preprocessorInput"></a>

```python
preprocessor_input: IResolvable | IotCommandPreprocessor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotCommandTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]

---

##### `command_id`<sup>Required</sup> <a name="command_id" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.commandId"></a>

```python
command_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.deprecated"></a>

```python
deprecated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `payload_template`<sup>Required</sup> <a name="payload_template" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.payloadTemplate"></a>

```python
payload_template: str
```

- *Type:* str

---

##### `pending_deletion`<sup>Required</sup> <a name="pending_deletion" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.pendingDeletion"></a>

```python
pending_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotCommand.IotCommand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotCommandConfig <a name="IotCommandConfig" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command_id: str,
  created_at: str = None,
  deprecated: bool | IResolvable = None,
  description: str = None,
  display_name: str = None,
  last_updated_at: str = None,
  mandatory_parameters: IResolvable | typing.List[IotCommandMandatoryParameters] = None,
  namespace: str = None,
  payload: IotCommandPayload = None,
  payload_template: str = None,
  pending_deletion: bool | IResolvable = None,
  preprocessor: IotCommandPreprocessor = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[IotCommandTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId">command_id</a></code> | <code>str</code> | The unique identifier for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt">created_at</a></code> | <code>str</code> | The date and time when the command was created. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated">deprecated</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether the command is deprecated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description">description</a></code> | <code>str</code> | The description of the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | The date and time when the command was last updated. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters">mandatory_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]</code> | The list of mandatory parameters for the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace to which the command belongs. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload">payload</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | The payload associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate">payload_template</a></code> | <code>str</code> | The payload template associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion">pending_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating whether the command is pending deletion. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor">preprocessor</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | The command preprocessor configuration. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The customer role associated with the command. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]</code> | The tags to be associated with the command. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command_id`<sup>Required</sup> <a name="command_id" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.commandId"></a>

```python
command_id: str
```

- *Type:* str

The unique identifier for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#command_id IotCommand#command_id}

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

The date and time when the command was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#created_at IotCommand#created_at}

---

##### `deprecated`<sup>Optional</sup> <a name="deprecated" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.deprecated"></a>

```python
deprecated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicating whether the command is deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#deprecated IotCommand#deprecated}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#display_name IotCommand#display_name}

---

##### `last_updated_at`<sup>Optional</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

The date and time when the command was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}

---

##### `mandatory_parameters`<sup>Optional</sup> <a name="mandatory_parameters" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.mandatoryParameters"></a>

```python
mandatory_parameters: IResolvable | typing.List[IotCommandMandatoryParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]

The list of mandatory parameters for the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace to which the command belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#namespace IotCommand#namespace}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payload"></a>

```python
payload: IotCommandPayload
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

The payload associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload IotCommand#payload}

---

##### `payload_template`<sup>Optional</sup> <a name="payload_template" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.payloadTemplate"></a>

```python
payload_template: str
```

- *Type:* str

The payload template associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#payload_template IotCommand#payload_template}

---

##### `pending_deletion`<sup>Optional</sup> <a name="pending_deletion" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.pendingDeletion"></a>

```python
pending_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicating whether the command is pending deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}

---

##### `preprocessor`<sup>Optional</sup> <a name="preprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.preprocessor"></a>

```python
preprocessor: IotCommandPreprocessor
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

The command preprocessor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The customer role associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#role_arn IotCommand#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotCommand.IotCommandConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotCommandTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]

The tags to be associated with the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#tags IotCommand#tags}

---

### IotCommandMandatoryParameters <a name="IotCommandMandatoryParameters" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParameters(
  default_value: IotCommandMandatoryParametersDefaultValue = None,
  description: str = None,
  name: str = None,
  type: str = None,
  value: IotCommandMandatoryParametersValue = None,
  value_conditions: IResolvable | typing.List[IotCommandMandatoryParametersValueConditions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#default_value IotCommand#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#name IotCommand#name}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#type IotCommand#type}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions">value_conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}. |

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.defaultValue"></a>

```python
default_value: IotCommandMandatoryParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#default_value IotCommand#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#description IotCommand#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#name IotCommand#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#type IotCommand#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.value"></a>

```python
value: IotCommandMandatoryParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}.

---

##### `value_conditions`<sup>Optional</sup> <a name="value_conditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters.property.valueConditions"></a>

```python
value_conditions: IResolvable | typing.List[IotCommandMandatoryParametersValueConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}.

---

### IotCommandMandatoryParametersDefaultValue <a name="IotCommandMandatoryParametersDefaultValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersDefaultValue(
  b: bool | IResolvable = None,
  bin: str = None,
  d: typing.Union[int, float] = None,
  i: typing.Union[int, float] = None,
  l: str = None,
  s: str = None,
  ul: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b">b</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin">bin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d">d</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i">i</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l">l</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s">s</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul">ul</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.b"></a>

```python
b: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.bin"></a>

```python
bin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.d"></a>

```python
d: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.i"></a>

```python
i: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.l"></a>

```python
l: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.s"></a>

```python
s: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue.property.ul"></a>

```python
ul: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValue <a name="IotCommandMandatoryParametersValue" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValue(
  b: bool | IResolvable = None,
  bin: str = None,
  d: typing.Union[int, float] = None,
  i: typing.Union[int, float] = None,
  l: str = None,
  s: str = None,
  ul: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b">b</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin">bin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d">d</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i">i</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l">l</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s">s</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul">ul</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}. |

---

##### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.b"></a>

```python
b: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.bin"></a>

```python
bin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

##### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.d"></a>

```python
d: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

##### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.i"></a>

```python
i: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

##### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.l"></a>

```python
l: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

##### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.s"></a>

```python
s: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

##### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue.property.ul"></a>

```python
ul: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

### IotCommandMandatoryParametersValueConditions <a name="IotCommandMandatoryParametersValueConditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditions(
  comparison_operator: str = None,
  operand: IotCommandMandatoryParametersValueConditionsOperand = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#operand IotCommand#operand}. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}.

---

##### `operand`<sup>Optional</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions.property.operand"></a>

```python
operand: IotCommandMandatoryParametersValueConditionsOperand
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#operand IotCommand#operand}.

---

### IotCommandMandatoryParametersValueConditionsOperand <a name="IotCommandMandatoryParametersValueConditionsOperand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsOperand(
  number: str = None,
  number_range: IotCommandMandatoryParametersValueConditionsOperandNumberRange = None,
  numbers: typing.List[str] = None,
  string: str = None,
  strings: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number">number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number IotCommand#number}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange">number_range</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number_range IotCommand#number_range}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers">numbers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#numbers IotCommand#numbers}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string">string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#string IotCommand#string}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings">strings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#strings IotCommand#strings}. |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.number"></a>

```python
number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number IotCommand#number}.

---

##### `number_range`<sup>Optional</sup> <a name="number_range" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numberRange"></a>

```python
number_range: IotCommandMandatoryParametersValueConditionsOperandNumberRange
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.numbers"></a>

```python
numbers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

##### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.string"></a>

```python
string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#string IotCommand#string}.

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand.property.strings"></a>

```python
strings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#strings IotCommand#strings}.

---

### IotCommandMandatoryParametersValueConditionsOperandNumberRange <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRange" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange(
  max: str = None,
  min: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max">max</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#max IotCommand#max}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min">min</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#min IotCommand#min}. |

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.max"></a>

```python
max: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#max IotCommand#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange.property.min"></a>

```python
min: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#min IotCommand#min}.

---

### IotCommandPayload <a name="IotCommandPayload" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPayload(
  content: str = None,
  content_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content IotCommand#content}. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content_type IotCommand#content_type}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content IotCommand#content}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.iotCommand.IotCommandPayload.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#content_type IotCommand#content_type}.

---

### IotCommandPreprocessor <a name="IotCommandPreprocessor" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPreprocessor(
  aws_json_substitution: IotCommandPreprocessorAwsJsonSubstitution = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution">aws_json_substitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}. |

---

##### `aws_json_substitution`<sup>Optional</sup> <a name="aws_json_substitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor.property.awsJsonSubstitution"></a>

```python
aws_json_substitution: IotCommandPreprocessorAwsJsonSubstitution
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}.

---

### IotCommandPreprocessorAwsJsonSubstitution <a name="IotCommandPreprocessorAwsJsonSubstitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPreprocessorAwsJsonSubstitution(
  output_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#output_format IotCommand#output_format}. |

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

### IotCommandTags <a name="IotCommandTags" id="@cdktn/provider-awscc.iotCommand.IotCommandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#key IotCommand#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#value IotCommand#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCommandMandatoryParametersDefaultValueOutputReference <a name="IotCommandMandatoryParametersDefaultValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB">reset_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin">reset_bin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD">reset_d</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI">reset_i</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL">reset_l</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS">reset_s</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl">reset_ul</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_b` <a name="reset_b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetB"></a>

```python
def reset_b() -> None
```

##### `reset_bin` <a name="reset_bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetBin"></a>

```python
def reset_bin() -> None
```

##### `reset_d` <a name="reset_d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetD"></a>

```python
def reset_d() -> None
```

##### `reset_i` <a name="reset_i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetI"></a>

```python
def reset_i() -> None
```

##### `reset_l` <a name="reset_l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetL"></a>

```python
def reset_l() -> None
```

##### `reset_s` <a name="reset_s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetS"></a>

```python
def reset_s() -> None
```

##### `reset_ul` <a name="reset_ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.resetUl"></a>

```python
def reset_ul() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput">bin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput">b_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput">d_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput">i_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput">l_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput">s_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput">ul_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b">b</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin">bin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d">d</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i">i</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l">l</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s">s</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul">ul</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bin_input`<sup>Optional</sup> <a name="bin_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.binInput"></a>

```python
bin_input: str
```

- *Type:* str

---

##### `b_input`<sup>Optional</sup> <a name="b_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bInput"></a>

```python
b_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `d_input`<sup>Optional</sup> <a name="d_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.dInput"></a>

```python
d_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `i_input`<sup>Optional</sup> <a name="i_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.iInput"></a>

```python
i_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `l_input`<sup>Optional</sup> <a name="l_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.lInput"></a>

```python
l_input: str
```

- *Type:* str

---

##### `s_input`<sup>Optional</sup> <a name="s_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.sInput"></a>

```python
s_input: str
```

- *Type:* str

---

##### `ul_input`<sup>Optional</sup> <a name="ul_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ulInput"></a>

```python
ul_input: str
```

- *Type:* str

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.b"></a>

```python
b: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.bin"></a>

```python
bin: str
```

- *Type:* str

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.d"></a>

```python
d: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.i"></a>

```python
i: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.l"></a>

```python
l: str
```

- *Type:* str

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.s"></a>

```python
s: str
```

- *Type:* str

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.ul"></a>

```python
ul: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---


### IotCommandMandatoryParametersList <a name="IotCommandMandatoryParametersList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotCommandMandatoryParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotCommandMandatoryParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>]

---


### IotCommandMandatoryParametersOutputReference <a name="IotCommandMandatoryParametersOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue">put_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions">put_value_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions">reset_value_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_value` <a name="put_default_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue"></a>

```python
def put_default_value(
  b: bool | IResolvable = None,
  bin: str = None,
  d: typing.Union[int, float] = None,
  i: typing.Union[int, float] = None,
  l: str = None,
  s: str = None,
  ul: str = None
) -> None
```

###### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.b"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

###### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.bin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

###### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.d"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

###### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.i"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

###### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.l"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

###### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.s"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

###### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putDefaultValue.parameter.ul"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue"></a>

```python
def put_value(
  b: bool | IResolvable = None,
  bin: str = None,
  d: typing.Union[int, float] = None,
  i: typing.Union[int, float] = None,
  l: str = None,
  s: str = None,
  ul: str = None
) -> None
```

###### `b`<sup>Optional</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.b"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#b IotCommand#b}.

---

###### `bin`<sup>Optional</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.bin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#bin IotCommand#bin}.

---

###### `d`<sup>Optional</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.d"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#d IotCommand#d}.

---

###### `i`<sup>Optional</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.i"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#i IotCommand#i}.

---

###### `l`<sup>Optional</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.l"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#l IotCommand#l}.

---

###### `s`<sup>Optional</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.s"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#s IotCommand#s}.

---

###### `ul`<sup>Optional</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValue.parameter.ul"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#ul IotCommand#ul}.

---

##### `put_value_conditions` <a name="put_value_conditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions"></a>

```python
def put_value_conditions(
  value: IResolvable | typing.List[IotCommandMandatoryParametersValueConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.putValueConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_value_conditions` <a name="reset_value_conditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.resetValueConditions"></a>

```python
def reset_value_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue">default_value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions">value_conditions</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput">value_conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValue"></a>

```python
default_value: IotCommandMandatoryParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValueOutputReference">IotCommandMandatoryParametersDefaultValueOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.value"></a>

```python
value: IotCommandMandatoryParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference">IotCommandMandatoryParametersValueOutputReference</a>

---

##### `value_conditions`<sup>Required</sup> <a name="value_conditions" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditions"></a>

```python
value_conditions: IotCommandMandatoryParametersValueConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList">IotCommandMandatoryParametersValueConditionsList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: IResolvable | IotCommandMandatoryParametersDefaultValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersDefaultValue">IotCommandMandatoryParametersDefaultValue</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_conditions_input`<sup>Optional</sup> <a name="value_conditions_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueConditionsInput"></a>

```python
value_conditions_input: IResolvable | typing.List[IotCommandMandatoryParametersValueConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | IotCommandMandatoryParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParameters">IotCommandMandatoryParameters</a>

---


### IotCommandMandatoryParametersValueConditionsList <a name="IotCommandMandatoryParametersValueConditionsList" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotCommandMandatoryParametersValueConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotCommandMandatoryParametersValueConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>]

---


### IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax">reset_max</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin">reset_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max` <a name="reset_max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMax"></a>

```python
def reset_max() -> None
```

##### `reset_min` <a name="reset_min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.resetMin"></a>

```python
def reset_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput">max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput">min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.maxInput"></a>

```python
max_input: str
```

- *Type:* str

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.minInput"></a>

```python
min_input: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParametersValueConditionsOperandNumberRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---


### IotCommandMandatoryParametersValueConditionsOperandOutputReference <a name="IotCommandMandatoryParametersValueConditionsOperandOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange">put_number_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber">reset_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange">reset_number_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers">reset_numbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString">reset_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings">reset_strings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_number_range` <a name="put_number_range" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange"></a>

```python
def put_number_range(
  max: str = None,
  min: str = None
) -> None
```

###### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.max"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#max IotCommand#max}.

---

###### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.putNumberRange.parameter.min"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#min IotCommand#min}.

---

##### `reset_number` <a name="reset_number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```

##### `reset_number_range` <a name="reset_number_range" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumberRange"></a>

```python
def reset_number_range() -> None
```

##### `reset_numbers` <a name="reset_numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetNumbers"></a>

```python
def reset_numbers() -> None
```

##### `reset_string` <a name="reset_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetString"></a>

```python
def reset_string() -> None
```

##### `reset_strings` <a name="reset_strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.resetStrings"></a>

```python
def reset_strings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange">number_range</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput">number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput">number_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput">numbers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput">string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput">strings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number">number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers">numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string">string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings">strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_range`<sup>Required</sup> <a name="number_range" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRange"></a>

```python
number_range: IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference">IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference</a>

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberInput"></a>

```python
number_input: str
```

- *Type:* str

---

##### `number_range_input`<sup>Optional</sup> <a name="number_range_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numberRangeInput"></a>

```python
number_range_input: IResolvable | IotCommandMandatoryParametersValueConditionsOperandNumberRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

---

##### `numbers_input`<sup>Optional</sup> <a name="numbers_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbersInput"></a>

```python
numbers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_input`<sup>Optional</sup> <a name="string_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringInput"></a>

```python
string_input: str
```

- *Type:* str

---

##### `strings_input`<sup>Optional</sup> <a name="strings_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.stringsInput"></a>

```python
strings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.number"></a>

```python
number: str
```

- *Type:* str

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.numbers"></a>

```python
numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string`<sup>Required</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.string"></a>

```python
string: str
```

- *Type:* str

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.strings"></a>

```python
strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParametersValueConditionsOperand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---


### IotCommandMandatoryParametersValueConditionsOutputReference <a name="IotCommandMandatoryParametersValueConditionsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand">put_operand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand">reset_operand</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operand` <a name="put_operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand"></a>

```python
def put_operand(
  number: str = None,
  number_range: IotCommandMandatoryParametersValueConditionsOperandNumberRange = None,
  numbers: typing.List[str] = None,
  string: str = None,
  strings: typing.List[str] = None
) -> None
```

###### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.number"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number IotCommand#number}.

---

###### `number_range`<sup>Optional</sup> <a name="number_range" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.numberRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandNumberRange">IotCommandMandatoryParametersValueConditionsOperandNumberRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#number_range IotCommand#number_range}.

---

###### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.numbers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#numbers IotCommand#numbers}.

---

###### `string`<sup>Optional</sup> <a name="string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.string"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#string IotCommand#string}.

---

###### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.putOperand.parameter.strings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#strings IotCommand#strings}.

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_operand` <a name="reset_operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.resetOperand"></a>

```python
def reset_operand() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand">operand</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput">operand_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operand"></a>

```python
operand: IotCommandMandatoryParametersValueConditionsOperandOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperandOutputReference">IotCommandMandatoryParametersValueConditionsOperandOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `operand_input`<sup>Optional</sup> <a name="operand_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.operandInput"></a>

```python
operand_input: IResolvable | IotCommandMandatoryParametersValueConditionsOperand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOperand">IotCommandMandatoryParametersValueConditionsOperand</a>

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParametersValueConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueConditions">IotCommandMandatoryParametersValueConditions</a>

---


### IotCommandMandatoryParametersValueOutputReference <a name="IotCommandMandatoryParametersValueOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandMandatoryParametersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB">reset_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin">reset_bin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD">reset_d</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI">reset_i</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL">reset_l</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS">reset_s</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl">reset_ul</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_b` <a name="reset_b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetB"></a>

```python
def reset_b() -> None
```

##### `reset_bin` <a name="reset_bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetBin"></a>

```python
def reset_bin() -> None
```

##### `reset_d` <a name="reset_d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetD"></a>

```python
def reset_d() -> None
```

##### `reset_i` <a name="reset_i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetI"></a>

```python
def reset_i() -> None
```

##### `reset_l` <a name="reset_l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetL"></a>

```python
def reset_l() -> None
```

##### `reset_s` <a name="reset_s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetS"></a>

```python
def reset_s() -> None
```

##### `reset_ul` <a name="reset_ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.resetUl"></a>

```python
def reset_ul() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput">bin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput">b_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput">d_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput">i_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput">l_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput">s_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput">ul_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b">b</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin">bin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d">d</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i">i</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l">l</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s">s</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul">ul</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bin_input`<sup>Optional</sup> <a name="bin_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.binInput"></a>

```python
bin_input: str
```

- *Type:* str

---

##### `b_input`<sup>Optional</sup> <a name="b_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bInput"></a>

```python
b_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `d_input`<sup>Optional</sup> <a name="d_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.dInput"></a>

```python
d_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `i_input`<sup>Optional</sup> <a name="i_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.iInput"></a>

```python
i_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `l_input`<sup>Optional</sup> <a name="l_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.lInput"></a>

```python
l_input: str
```

- *Type:* str

---

##### `s_input`<sup>Optional</sup> <a name="s_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.sInput"></a>

```python
s_input: str
```

- *Type:* str

---

##### `ul_input`<sup>Optional</sup> <a name="ul_input" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ulInput"></a>

```python
ul_input: str
```

- *Type:* str

---

##### `b`<sup>Required</sup> <a name="b" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.b"></a>

```python
b: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bin`<sup>Required</sup> <a name="bin" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.bin"></a>

```python
bin: str
```

- *Type:* str

---

##### `d`<sup>Required</sup> <a name="d" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.d"></a>

```python
d: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `i`<sup>Required</sup> <a name="i" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.i"></a>

```python
i: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `l`<sup>Required</sup> <a name="l" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.l"></a>

```python
l: str
```

- *Type:* str

---

##### `s`<sup>Required</sup> <a name="s" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.s"></a>

```python
s: str
```

- *Type:* str

---

##### `ul`<sup>Required</sup> <a name="ul" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.ul"></a>

```python
ul: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandMandatoryParametersValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandMandatoryParametersValue">IotCommandMandatoryParametersValue</a>

---


### IotCommandPayloadOutputReference <a name="IotCommandPayloadOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPayloadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandPayloadOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandPayload
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPayload">IotCommandPayload</a>

---


### IotCommandPreprocessorAwsJsonSubstitutionOutputReference <a name="IotCommandPreprocessorAwsJsonSubstitutionOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandPreprocessorAwsJsonSubstitution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---


### IotCommandPreprocessorOutputReference <a name="IotCommandPreprocessorOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandPreprocessorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution">put_aws_json_substitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution">reset_aws_json_substitution</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_json_substitution` <a name="put_aws_json_substitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution"></a>

```python
def put_aws_json_substitution(
  output_format: str = None
) -> None
```

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.putAwsJsonSubstitution.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_command#output_format IotCommand#output_format}.

---

##### `reset_aws_json_substitution` <a name="reset_aws_json_substitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.resetAwsJsonSubstitution"></a>

```python
def reset_aws_json_substitution() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution">aws_json_substitution</a></code> | <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput">aws_json_substitution_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_json_substitution`<sup>Required</sup> <a name="aws_json_substitution" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitution"></a>

```python
aws_json_substitution: IotCommandPreprocessorAwsJsonSubstitutionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitutionOutputReference">IotCommandPreprocessorAwsJsonSubstitutionOutputReference</a>

---

##### `aws_json_substitution_input`<sup>Optional</sup> <a name="aws_json_substitution_input" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.awsJsonSubstitutionInput"></a>

```python
aws_json_substitution_input: IResolvable | IotCommandPreprocessorAwsJsonSubstitution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorAwsJsonSubstitution">IotCommandPreprocessorAwsJsonSubstitution</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandPreprocessorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandPreprocessor
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandPreprocessor">IotCommandPreprocessor</a>

---


### IotCommandTagsList <a name="IotCommandTagsList" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotCommandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotCommandTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>]

---


### IotCommandTagsOutputReference <a name="IotCommandTagsOutputReference" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_command

iotCommand.IotCommandTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotCommand.IotCommandTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotCommandTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotCommand.IotCommandTags">IotCommandTags</a>

---



