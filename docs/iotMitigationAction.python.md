# `iotMitigationAction` Submodule <a name="`iotMitigationAction` Submodule" id="@cdktn/provider-awscc.iotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotMitigationAction <a name="IotMitigationAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationAction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_params: IotMitigationActionActionParams,
  role_arn: str,
  action_name: str = None,
  tags: IResolvable | typing.List[IotMitigationActionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionParams">action_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionName">action_name</a></code> | <code>str</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_params`<sup>Required</sup> <a name="action_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `action_name`<sup>Optional</sup> <a name="action_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.actionName"></a>

- *Type:* str

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams">put_action_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName">reset_action_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_params` <a name="put_action_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams"></a>

```python
def put_action_params(
  add_things_to_thing_group_params: IotMitigationActionActionParamsAddThingsToThingGroupParams = None,
  enable_io_t_logging_params: IotMitigationActionActionParamsEnableIoTLoggingParams = None,
  publish_finding_to_sns_params: IotMitigationActionActionParamsPublishFindingToSnsParams = None,
  replace_default_policy_version_params: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams = None,
  update_ca_certificate_params: IotMitigationActionActionParamsUpdateCaCertificateParams = None,
  update_device_certificate_params: IotMitigationActionActionParamsUpdateDeviceCertificateParams = None
) -> None
```

###### `add_things_to_thing_group_params`<sup>Optional</sup> <a name="add_things_to_thing_group_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.addThingsToThingGroupParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}

---

###### `enable_io_t_logging_params`<sup>Optional</sup> <a name="enable_io_t_logging_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.enableIoTLoggingParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}

---

###### `publish_finding_to_sns_params`<sup>Optional</sup> <a name="publish_finding_to_sns_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.publishFindingToSnsParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

Parameters, to define a mitigation action that publishes findings to Amazon SNS.

You can implement your own custom actions in response to the Amazon SNS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}

---

###### `replace_default_policy_version_params`<sup>Optional</sup> <a name="replace_default_policy_version_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.replaceDefaultPolicyVersionParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

Parameters to define a mitigation action that adds a blank policy to restrict permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}

---

###### `update_ca_certificate_params`<sup>Optional</sup> <a name="update_ca_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.updateCaCertificateParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

Parameters to define a mitigation action that changes the state of the CA certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}

---

###### `update_device_certificate_params`<sup>Optional</sup> <a name="update_device_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.updateDeviceCertificateParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

Parameters to define a mitigation action that changes the state of the device certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotMitigationActionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]

---

##### `reset_action_name` <a name="reset_action_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName"></a>

```python
def reset_action_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotMitigationAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams">action_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn">mitigation_action_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId">mitigation_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput">action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput">action_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_params`<sup>Required</sup> <a name="action_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams"></a>

```python
action_params: IotMitigationActionActionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mitigation_action_arn`<sup>Required</sup> <a name="mitigation_action_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn"></a>

```python
mitigation_action_arn: str
```

- *Type:* str

---

##### `mitigation_action_id`<sup>Required</sup> <a name="mitigation_action_id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId"></a>

```python
mitigation_action_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags"></a>

```python
tags: IotMitigationActionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a>

---

##### `action_name_input`<sup>Optional</sup> <a name="action_name_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput"></a>

```python
action_name_input: str
```

- *Type:* str

---

##### `action_params_input`<sup>Optional</sup> <a name="action_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput"></a>

```python
action_params_input: IResolvable | IotMitigationActionActionParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotMitigationActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotMitigationActionActionParams <a name="IotMitigationActionActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParams(
  add_things_to_thing_group_params: IotMitigationActionActionParamsAddThingsToThingGroupParams = None,
  enable_io_t_logging_params: IotMitigationActionActionParamsEnableIoTLoggingParams = None,
  publish_finding_to_sns_params: IotMitigationActionActionParamsPublishFindingToSnsParams = None,
  replace_default_policy_version_params: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams = None,
  update_ca_certificate_params: IotMitigationActionActionParamsUpdateCaCertificateParams = None,
  update_device_certificate_params: IotMitigationActionActionParamsUpdateDeviceCertificateParams = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams">add_things_to_thing_group_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams">enable_io_t_logging_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams">publish_finding_to_sns_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | Parameters, to define a mitigation action that publishes findings to Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams">replace_default_policy_version_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | Parameters to define a mitigation action that adds a blank policy to restrict permissions. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams">update_ca_certificate_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the CA certificate to inactive. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams">update_device_certificate_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the device certificate to inactive. |

---

##### `add_things_to_thing_group_params`<sup>Optional</sup> <a name="add_things_to_thing_group_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams"></a>

```python
add_things_to_thing_group_params: IotMitigationActionActionParamsAddThingsToThingGroupParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}

---

##### `enable_io_t_logging_params`<sup>Optional</sup> <a name="enable_io_t_logging_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams"></a>

```python
enable_io_t_logging_params: IotMitigationActionActionParamsEnableIoTLoggingParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}

---

##### `publish_finding_to_sns_params`<sup>Optional</sup> <a name="publish_finding_to_sns_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams"></a>

```python
publish_finding_to_sns_params: IotMitigationActionActionParamsPublishFindingToSnsParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

Parameters, to define a mitigation action that publishes findings to Amazon SNS.

You can implement your own custom actions in response to the Amazon SNS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}

---

##### `replace_default_policy_version_params`<sup>Optional</sup> <a name="replace_default_policy_version_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams"></a>

```python
replace_default_policy_version_params: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

Parameters to define a mitigation action that adds a blank policy to restrict permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}

---

##### `update_ca_certificate_params`<sup>Optional</sup> <a name="update_ca_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams"></a>

```python
update_ca_certificate_params: IotMitigationActionActionParamsUpdateCaCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

Parameters to define a mitigation action that changes the state of the CA certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}

---

##### `update_device_certificate_params`<sup>Optional</sup> <a name="update_device_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams"></a>

```python
update_device_certificate_params: IotMitigationActionActionParamsUpdateDeviceCertificateParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

Parameters to define a mitigation action that changes the state of the device certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}

---

### IotMitigationActionActionParamsAddThingsToThingGroupParams <a name="IotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams(
  override_dynamic_groups: bool | IResolvable = None,
  thing_group_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups">override_dynamic_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames">thing_group_names</a></code> | <code>typing.List[str]</code> | The list of groups to which you want to add the things that triggered the mitigation action. |

---

##### `override_dynamic_groups`<sup>Optional</sup> <a name="override_dynamic_groups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

```python
override_dynamic_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}

---

##### `thing_group_names`<sup>Optional</sup> <a name="thing_group_names" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames"></a>

```python
thing_group_names: typing.List[str]
```

- *Type:* typing.List[str]

The list of groups to which you want to add the things that triggered the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}

---

### IotMitigationActionActionParamsEnableIoTLoggingParams <a name="IotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams(
  log_level: str = None,
  role_arn_for_logging: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel">log_level</a></code> | <code>str</code> | Specifies which types of information are logged. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging">role_arn_for_logging</a></code> | <code>str</code> | The ARN of the IAM role used for logging. |

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Specifies which types of information are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}

---

##### `role_arn_for_logging`<sup>Optional</sup> <a name="role_arn_for_logging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging"></a>

```python
role_arn_for_logging: str
```

- *Type:* str

The ARN of the IAM role used for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}

---

### IotMitigationActionActionParamsPublishFindingToSnsParams <a name="IotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams(
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn">topic_arn</a></code> | <code>str</code> | The ARN of the topic to which you want to publish the findings. |

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

The ARN of the topic to which you want to publish the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}

---

### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams(
  template_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}. |

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}.

---

### IotMitigationActionActionParamsUpdateCaCertificateParams <a name="IotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams(
  action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionConfig <a name="IotMitigationActionConfig" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_params: IotMitigationActionActionParams,
  role_arn: str,
  action_name: str = None,
  tags: IResolvable | typing.List[IotMitigationActionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams">action_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName">action_name</a></code> | <code>str</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_params`<sup>Required</sup> <a name="action_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams"></a>

```python
action_params: IotMitigationActionActionParams
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `action_name`<sup>Optional</sup> <a name="action_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotMitigationActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

### IotMitigationActionTags <a name="IotMitigationActionTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key">key</a></code> | <code>str</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value">value</a></code> | <code>str</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#key IotMitigationAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#value IotMitigationAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups">reset_override_dynamic_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames">reset_thing_group_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_override_dynamic_groups` <a name="reset_override_dynamic_groups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups"></a>

```python
def reset_override_dynamic_groups() -> None
```

##### `reset_thing_group_names` <a name="reset_thing_group_names" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames"></a>

```python
def reset_thing_group_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput">override_dynamic_groups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput">thing_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">override_dynamic_groups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">thing_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `override_dynamic_groups_input`<sup>Optional</sup> <a name="override_dynamic_groups_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput"></a>

```python
override_dynamic_groups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `thing_group_names_input`<sup>Optional</sup> <a name="thing_group_names_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput"></a>

```python
thing_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `override_dynamic_groups`<sup>Required</sup> <a name="override_dynamic_groups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```python
override_dynamic_groups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `thing_group_names`<sup>Required</sup> <a name="thing_group_names" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```python
thing_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsAddThingsToThingGroupParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---


### IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging">reset_role_arn_for_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_level` <a name="reset_log_level" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_role_arn_for_logging` <a name="reset_role_arn_for_logging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging"></a>

```python
def reset_role_arn_for_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput">role_arn_for_logging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">role_arn_for_logging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `role_arn_for_logging_input`<sup>Optional</sup> <a name="role_arn_for_logging_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput"></a>

```python
role_arn_for_logging_input: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `role_arn_for_logging`<sup>Required</sup> <a name="role_arn_for_logging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```python
role_arn_for_logging: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsEnableIoTLoggingParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---


### IotMitigationActionActionParamsOutputReference <a name="IotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams">put_add_things_to_thing_group_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams">put_enable_io_t_logging_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams">put_publish_finding_to_sns_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams">put_replace_default_policy_version_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams">put_update_ca_certificate_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams">put_update_device_certificate_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams">reset_add_things_to_thing_group_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams">reset_enable_io_t_logging_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams">reset_publish_finding_to_sns_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams">reset_replace_default_policy_version_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams">reset_update_ca_certificate_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams">reset_update_device_certificate_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_add_things_to_thing_group_params` <a name="put_add_things_to_thing_group_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams"></a>

```python
def put_add_things_to_thing_group_params(
  override_dynamic_groups: bool | IResolvable = None,
  thing_group_names: typing.List[str] = None
) -> None
```

###### `override_dynamic_groups`<sup>Optional</sup> <a name="override_dynamic_groups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams.parameter.overrideDynamicGroups"></a>

- *Type:* bool | cdktn.IResolvable

Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}

---

###### `thing_group_names`<sup>Optional</sup> <a name="thing_group_names" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams.parameter.thingGroupNames"></a>

- *Type:* typing.List[str]

The list of groups to which you want to add the things that triggered the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}

---

##### `put_enable_io_t_logging_params` <a name="put_enable_io_t_logging_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams"></a>

```python
def put_enable_io_t_logging_params(
  log_level: str = None,
  role_arn_for_logging: str = None
) -> None
```

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams.parameter.logLevel"></a>

- *Type:* str

Specifies which types of information are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}

---

###### `role_arn_for_logging`<sup>Optional</sup> <a name="role_arn_for_logging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams.parameter.roleArnForLogging"></a>

- *Type:* str

The ARN of the IAM role used for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}

---

##### `put_publish_finding_to_sns_params` <a name="put_publish_finding_to_sns_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams"></a>

```python
def put_publish_finding_to_sns_params(
  topic_arn: str = None
) -> None
```

###### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams.parameter.topicArn"></a>

- *Type:* str

The ARN of the topic to which you want to publish the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}

---

##### `put_replace_default_policy_version_params` <a name="put_replace_default_policy_version_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams"></a>

```python
def put_replace_default_policy_version_params(
  template_name: str = None
) -> None
```

###### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}.

---

##### `put_update_ca_certificate_params` <a name="put_update_ca_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams"></a>

```python
def put_update_ca_certificate_params(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

##### `put_update_device_certificate_params` <a name="put_update_device_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams"></a>

```python
def put_update_device_certificate_params(
  action: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

##### `reset_add_things_to_thing_group_params` <a name="reset_add_things_to_thing_group_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams"></a>

```python
def reset_add_things_to_thing_group_params() -> None
```

##### `reset_enable_io_t_logging_params` <a name="reset_enable_io_t_logging_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams"></a>

```python
def reset_enable_io_t_logging_params() -> None
```

##### `reset_publish_finding_to_sns_params` <a name="reset_publish_finding_to_sns_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams"></a>

```python
def reset_publish_finding_to_sns_params() -> None
```

##### `reset_replace_default_policy_version_params` <a name="reset_replace_default_policy_version_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams"></a>

```python
def reset_replace_default_policy_version_params() -> None
```

##### `reset_update_ca_certificate_params` <a name="reset_update_ca_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams"></a>

```python
def reset_update_ca_certificate_params() -> None
```

##### `reset_update_device_certificate_params` <a name="reset_update_device_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams"></a>

```python
def reset_update_device_certificate_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">add_things_to_thing_group_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">enable_io_t_logging_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">publish_finding_to_sns_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">replace_default_policy_version_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">update_ca_certificate_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">update_device_certificate_params</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput">add_things_to_thing_group_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput">enable_io_t_logging_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput">publish_finding_to_sns_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput">replace_default_policy_version_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput">update_ca_certificate_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput">update_device_certificate_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_things_to_thing_group_params`<sup>Required</sup> <a name="add_things_to_thing_group_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```python
add_things_to_thing_group_params: IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `enable_io_t_logging_params`<sup>Required</sup> <a name="enable_io_t_logging_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```python
enable_io_t_logging_params: IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `publish_finding_to_sns_params`<sup>Required</sup> <a name="publish_finding_to_sns_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```python
publish_finding_to_sns_params: IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `replace_default_policy_version_params`<sup>Required</sup> <a name="replace_default_policy_version_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```python
replace_default_policy_version_params: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `update_ca_certificate_params`<sup>Required</sup> <a name="update_ca_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```python
update_ca_certificate_params: IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `update_device_certificate_params`<sup>Required</sup> <a name="update_device_certificate_params" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```python
update_device_certificate_params: IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `add_things_to_thing_group_params_input`<sup>Optional</sup> <a name="add_things_to_thing_group_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput"></a>

```python
add_things_to_thing_group_params_input: IResolvable | IotMitigationActionActionParamsAddThingsToThingGroupParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `enable_io_t_logging_params_input`<sup>Optional</sup> <a name="enable_io_t_logging_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput"></a>

```python
enable_io_t_logging_params_input: IResolvable | IotMitigationActionActionParamsEnableIoTLoggingParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `publish_finding_to_sns_params_input`<sup>Optional</sup> <a name="publish_finding_to_sns_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput"></a>

```python
publish_finding_to_sns_params_input: IResolvable | IotMitigationActionActionParamsPublishFindingToSnsParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `replace_default_policy_version_params_input`<sup>Optional</sup> <a name="replace_default_policy_version_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput"></a>

```python
replace_default_policy_version_params_input: IResolvable | IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `update_ca_certificate_params_input`<sup>Optional</sup> <a name="update_ca_certificate_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput"></a>

```python
update_ca_certificate_params_input: IResolvable | IotMitigationActionActionParamsUpdateCaCertificateParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `update_device_certificate_params_input`<sup>Optional</sup> <a name="update_device_certificate_params_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput"></a>

```python
update_device_certificate_params_input: IResolvable | IotMitigationActionActionParamsUpdateDeviceCertificateParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---


### IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsPublishFindingToSnsParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---


### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName">reset_template_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName"></a>

```python
def reset_template_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---


### IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsUpdateCaCertificateParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---


### IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction">reset_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction"></a>

```python
def reset_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionActionParamsUpdateDeviceCertificateParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---


### IotMitigationActionTagsList <a name="IotMitigationActionTagsList" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotMitigationActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotMitigationActionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>]

---


### IotMitigationActionTagsOutputReference <a name="IotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_mitigation_action

iotMitigationAction.IotMitigationActionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotMitigationActionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>

---



