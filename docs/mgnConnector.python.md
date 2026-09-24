# `mgnConnector` Submodule <a name="`mgnConnector` Submodule" id="@cdktn/provider-awscc.mgnConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnConnector <a name="MgnConnector" id="@cdktn/provider-awscc.mgnConnector.MgnConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector awscc_mgn_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  ssm_instance_id: str,
  ssm_command_config: MgnConnectorSsmCommandConfig = None,
  tags: IResolvable | typing.List[MgnConnectorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.ssmInstanceId">ssm_instance_id</a></code> | <code>str</code> | The SSM instance ID associated with this connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.ssmCommandConfig">ssm_command_config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | SSM command configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]</code> | Tags to assign to the connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.name"></a>

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#name MgnConnector#name}

---

##### `ssm_instance_id`<sup>Required</sup> <a name="ssm_instance_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.ssmInstanceId"></a>

- *Type:* str

The SSM instance ID associated with this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_instance_id MgnConnector#ssm_instance_id}

---

##### `ssm_command_config`<sup>Optional</sup> <a name="ssm_command_config" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.ssmCommandConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

SSM command configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_command_config MgnConnector#ssm_command_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]

Tags to assign to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#tags MgnConnector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig">put_ssm_command_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetSsmCommandConfig">reset_ssm_command_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ssm_command_config` <a name="put_ssm_command_config" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig"></a>

```python
def put_ssm_command_config(
  cloudwatch_log_group_name: str = None,
  cloudwatch_output_enabled: bool | IResolvable = None,
  output_s3_bucket_name: str = None,
  s3_output_enabled: bool | IResolvable = None
) -> None
```

###### `cloudwatch_log_group_name`<sup>Optional</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig.parameter.cloudwatchLogGroupName"></a>

- *Type:* str

The CloudWatch Logs group name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_log_group_name MgnConnector#cloudwatch_log_group_name}

---

###### `cloudwatch_output_enabled`<sup>Optional</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig.parameter.cloudwatchOutputEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether SSM command output is sent to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_output_enabled MgnConnector#cloudwatch_output_enabled}

---

###### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig.parameter.outputS3BucketName"></a>

- *Type:* str

The S3 bucket name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#output_s3_bucket_name MgnConnector#output_s3_bucket_name}

---

###### `s3_output_enabled`<sup>Optional</sup> <a name="s3_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putSsmCommandConfig.parameter.s3OutputEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether SSM command output is stored in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#s3_output_enabled MgnConnector#s3_output_enabled}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MgnConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]

---

##### `reset_ssm_command_config` <a name="reset_ssm_command_config" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetSsmCommandConfig"></a>

```python
def reset_ssm_command_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MgnConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MgnConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MgnConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MgnConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MgnConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfig">ssm_command_config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference">MgnConnectorSsmCommandConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList">MgnConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfigInput">ssm_command_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceIdInput">ssm_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceId">ssm_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ssm_command_config`<sup>Required</sup> <a name="ssm_command_config" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfig"></a>

```python
ssm_command_config: MgnConnectorSsmCommandConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference">MgnConnectorSsmCommandConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tags"></a>

```python
tags: MgnConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList">MgnConnectorTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ssm_command_config_input`<sup>Optional</sup> <a name="ssm_command_config_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmCommandConfigInput"></a>

```python
ssm_command_config_input: IResolvable | MgnConnectorSsmCommandConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

---

##### `ssm_instance_id_input`<sup>Optional</sup> <a name="ssm_instance_id_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceIdInput"></a>

```python
ssm_instance_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MgnConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ssm_instance_id`<sup>Required</sup> <a name="ssm_instance_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.ssmInstanceId"></a>

```python
ssm_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnConnector.MgnConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MgnConnectorConfig <a name="MgnConnectorConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  ssm_instance_id: str,
  ssm_command_config: MgnConnectorSsmCommandConfig = None,
  tags: IResolvable | typing.List[MgnConnectorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.name">name</a></code> | <code>str</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmInstanceId">ssm_instance_id</a></code> | <code>str</code> | The SSM instance ID associated with this connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmCommandConfig">ssm_command_config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | SSM command configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]</code> | Tags to assign to the connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#name MgnConnector#name}

---

##### `ssm_instance_id`<sup>Required</sup> <a name="ssm_instance_id" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmInstanceId"></a>

```python
ssm_instance_id: str
```

- *Type:* str

The SSM instance ID associated with this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_instance_id MgnConnector#ssm_instance_id}

---

##### `ssm_command_config`<sup>Optional</sup> <a name="ssm_command_config" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.ssmCommandConfig"></a>

```python
ssm_command_config: MgnConnectorSsmCommandConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

SSM command configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#ssm_command_config MgnConnector#ssm_command_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MgnConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]

Tags to assign to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#tags MgnConnector#tags}

---

### MgnConnectorSsmCommandConfig <a name="MgnConnectorSsmCommandConfig" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorSsmCommandConfig(
  cloudwatch_log_group_name: str = None,
  cloudwatch_output_enabled: bool | IResolvable = None,
  output_s3_bucket_name: str = None,
  s3_output_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchLogGroupName">cloudwatch_log_group_name</a></code> | <code>str</code> | The CloudWatch Logs group name for SSM command output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchOutputEnabled">cloudwatch_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether SSM command output is sent to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | The S3 bucket name for SSM command output. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.s3OutputEnabled">s3_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether SSM command output is stored in S3. |

---

##### `cloudwatch_log_group_name`<sup>Optional</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchLogGroupName"></a>

```python
cloudwatch_log_group_name: str
```

- *Type:* str

The CloudWatch Logs group name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_log_group_name MgnConnector#cloudwatch_log_group_name}

---

##### `cloudwatch_output_enabled`<sup>Optional</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.cloudwatchOutputEnabled"></a>

```python
cloudwatch_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether SSM command output is sent to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#cloudwatch_output_enabled MgnConnector#cloudwatch_output_enabled}

---

##### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

The S3 bucket name for SSM command output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#output_s3_bucket_name MgnConnector#output_s3_bucket_name}

---

##### `s3_output_enabled`<sup>Optional</sup> <a name="s3_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig.property.s3OutputEnabled"></a>

```python
s3_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether SSM command output is stored in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#s3_output_enabled MgnConnector#s3_output_enabled}

---

### MgnConnectorTags <a name="MgnConnectorTags" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#key MgnConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mgn_connector#value MgnConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnConnectorSsmCommandConfigOutputReference <a name="MgnConnectorSsmCommandConfigOutputReference" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorSsmCommandConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchLogGroupName">reset_cloudwatch_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchOutputEnabled">reset_cloudwatch_output_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetOutputS3BucketName">reset_output_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetS3OutputEnabled">reset_s3_output_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_log_group_name` <a name="reset_cloudwatch_log_group_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchLogGroupName"></a>

```python
def reset_cloudwatch_log_group_name() -> None
```

##### `reset_cloudwatch_output_enabled` <a name="reset_cloudwatch_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetCloudwatchOutputEnabled"></a>

```python
def reset_cloudwatch_output_enabled() -> None
```

##### `reset_output_s3_bucket_name` <a name="reset_output_s3_bucket_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetOutputS3BucketName"></a>

```python
def reset_output_s3_bucket_name() -> None
```

##### `reset_s3_output_enabled` <a name="reset_s3_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.resetS3OutputEnabled"></a>

```python
def reset_s3_output_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupNameInput">cloudwatch_log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabledInput">cloudwatch_output_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketNameInput">output_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabledInput">s3_output_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupName">cloudwatch_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatch_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabled">s3_output_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_name_input`<sup>Optional</sup> <a name="cloudwatch_log_group_name_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupNameInput"></a>

```python
cloudwatch_log_group_name_input: str
```

- *Type:* str

---

##### `cloudwatch_output_enabled_input`<sup>Optional</sup> <a name="cloudwatch_output_enabled_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabledInput"></a>

```python
cloudwatch_output_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `output_s3_bucket_name_input`<sup>Optional</sup> <a name="output_s3_bucket_name_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketNameInput"></a>

```python
output_s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_output_enabled_input`<sup>Optional</sup> <a name="s3_output_enabled_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabledInput"></a>

```python
s3_output_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cloudwatch_log_group_name`<sup>Required</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchLogGroupName"></a>

```python
cloudwatch_log_group_name: str
```

- *Type:* str

---

##### `cloudwatch_output_enabled`<sup>Required</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```python
cloudwatch_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `output_s3_bucket_name`<sup>Required</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

---

##### `s3_output_enabled`<sup>Required</sup> <a name="s3_output_enabled" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.s3OutputEnabled"></a>

```python
s3_output_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MgnConnectorSsmCommandConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorSsmCommandConfig">MgnConnectorSsmCommandConfig</a>

---


### MgnConnectorTagsList <a name="MgnConnectorTagsList" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MgnConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MgnConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>]

---


### MgnConnectorTagsOutputReference <a name="MgnConnectorTagsOutputReference" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mgn_connector

mgnConnector.MgnConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mgnConnector.MgnConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MgnConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnConnector.MgnConnectorTags">MgnConnectorTags</a>

---



