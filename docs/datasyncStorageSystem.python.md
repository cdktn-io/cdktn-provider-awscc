# `datasyncStorageSystem` Submodule <a name="`datasyncStorageSystem` Submodule" id="@cdktn/provider-awscc.datasyncStorageSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncStorageSystem <a name="DatasyncStorageSystem" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system awscc_datasync_storage_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_arns: typing.List[str],
  server_configuration: DatasyncStorageSystemServerConfiguration,
  system_type: str,
  cloudwatch_log_group_arn: str = None,
  name: str = None,
  server_credentials: DatasyncStorageSystemServerCredentials = None,
  tags: IResolvable | typing.List[DatasyncStorageSystemTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.serverConfiguration">server_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.systemType">system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.serverCredentials">server_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.agentArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}.

---

##### `server_configuration`<sup>Required</sup> <a name="server_configuration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.serverConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}.

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.systemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.cloudwatchLogGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}.

---

##### `server_credentials`<sup>Optional</sup> <a name="server_credentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.serverCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration">put_server_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials">put_server_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetCloudwatchLogGroupArn">reset_cloudwatch_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetServerCredentials">reset_server_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_server_configuration` <a name="put_server_configuration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration"></a>

```python
def put_server_configuration(
  server_hostname: str,
  server_port: typing.Union[int, float] = None
) -> None
```

###### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration.parameter.serverHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_hostname DatasyncStorageSystem#server_hostname}.

---

###### `server_port`<sup>Optional</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerConfiguration.parameter.serverPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_port DatasyncStorageSystem#server_port}.

---

##### `put_server_credentials` <a name="put_server_credentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials"></a>

```python
def put_server_credentials(
  password: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#password DatasyncStorageSystem#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putServerCredentials.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#username DatasyncStorageSystem#username}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DatasyncStorageSystemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]

---

##### `reset_cloudwatch_log_group_arn` <a name="reset_cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetCloudwatchLogGroupArn"></a>

```python
def reset_cloudwatch_log_group_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_server_credentials` <a name="reset_server_credentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetServerCredentials"></a>

```python
def reset_server_credentials() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatasyncStorageSystem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatasyncStorageSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasyncStorageSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasyncStorageSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncStorageSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connectivityStatus">connectivity_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.secretsManagerArn">secrets_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfiguration">server_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference">DatasyncStorageSystemServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentials">server_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference">DatasyncStorageSystemServerCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemArn">storage_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemId">storage_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList">DatasyncStorageSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArnsInput">agent_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfigurationInput">server_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentialsInput">server_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemTypeInput">system_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connectivity_status`<sup>Required</sup> <a name="connectivity_status" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.connectivityStatus"></a>

```python
connectivity_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secrets_manager_arn`<sup>Required</sup> <a name="secrets_manager_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.secretsManagerArn"></a>

```python
secrets_manager_arn: str
```

- *Type:* str

---

##### `server_configuration`<sup>Required</sup> <a name="server_configuration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfiguration"></a>

```python
server_configuration: DatasyncStorageSystemServerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference">DatasyncStorageSystemServerConfigurationOutputReference</a>

---

##### `server_credentials`<sup>Required</sup> <a name="server_credentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentials"></a>

```python
server_credentials: DatasyncStorageSystemServerCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference">DatasyncStorageSystemServerCredentialsOutputReference</a>

---

##### `storage_system_arn`<sup>Required</sup> <a name="storage_system_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemArn"></a>

```python
storage_system_arn: str
```

- *Type:* str

---

##### `storage_system_id`<sup>Required</sup> <a name="storage_system_id" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.storageSystemId"></a>

```python
storage_system_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tags"></a>

```python
tags: DatasyncStorageSystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList">DatasyncStorageSystemTagsList</a>

---

##### `agent_arns_input`<sup>Optional</sup> <a name="agent_arns_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArnsInput"></a>

```python
agent_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `server_configuration_input`<sup>Optional</sup> <a name="server_configuration_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverConfigurationInput"></a>

```python
server_configuration_input: IResolvable | DatasyncStorageSystemServerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

---

##### `server_credentials_input`<sup>Optional</sup> <a name="server_credentials_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.serverCredentialsInput"></a>

```python
server_credentials_input: IResolvable | DatasyncStorageSystemServerCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

---

##### `system_type_input`<sup>Optional</sup> <a name="system_type_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemTypeInput"></a>

```python
system_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DatasyncStorageSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncStorageSystemConfig <a name="DatasyncStorageSystemConfig" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_arns: typing.List[str],
  server_configuration: DatasyncStorageSystemServerConfiguration,
  system_type: str,
  cloudwatch_log_group_arn: str = None,
  name: str = None,
  server_credentials: DatasyncStorageSystemServerCredentials = None,
  tags: IResolvable | typing.List[DatasyncStorageSystemTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverConfiguration">server_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.systemType">system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverCredentials">server_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#agent_arns DatasyncStorageSystem#agent_arns}.

---

##### `server_configuration`<sup>Required</sup> <a name="server_configuration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverConfiguration"></a>

```python
server_configuration: DatasyncStorageSystemServerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_configuration DatasyncStorageSystem#server_configuration}.

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#system_type DatasyncStorageSystem#system_type}.

---

##### `cloudwatch_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_log_group_arn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#cloudwatch_log_group_arn DatasyncStorageSystem#cloudwatch_log_group_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#name DatasyncStorageSystem#name}.

---

##### `server_credentials`<sup>Optional</sup> <a name="server_credentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.serverCredentials"></a>

```python
server_credentials: DatasyncStorageSystemServerCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_credentials DatasyncStorageSystem#server_credentials}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DatasyncStorageSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#tags DatasyncStorageSystem#tags}.

---

### DatasyncStorageSystemServerConfiguration <a name="DatasyncStorageSystemServerConfiguration" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemServerConfiguration(
  server_hostname: str,
  server_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverHostname">server_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_hostname DatasyncStorageSystem#server_hostname}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_port DatasyncStorageSystem#server_port}. |

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_hostname DatasyncStorageSystem#server_hostname}.

---

##### `server_port`<sup>Optional</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#server_port DatasyncStorageSystem#server_port}.

---

### DatasyncStorageSystemServerCredentials <a name="DatasyncStorageSystemServerCredentials" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemServerCredentials(
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#password DatasyncStorageSystem#password}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#username DatasyncStorageSystem#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#password DatasyncStorageSystem#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#username DatasyncStorageSystem#username}.

---

### DatasyncStorageSystemTags <a name="DatasyncStorageSystemTags" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#key DatasyncStorageSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#value DatasyncStorageSystem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#key DatasyncStorageSystem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datasync_storage_system#value DatasyncStorageSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncStorageSystemServerConfigurationOutputReference <a name="DatasyncStorageSystemServerConfigurationOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resetServerPort">reset_server_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_port` <a name="reset_server_port" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.resetServerPort"></a>

```python
def reset_server_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostnameInput">server_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPortInput">server_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname">server_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_hostname_input`<sup>Optional</sup> <a name="server_hostname_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostnameInput"></a>

```python
server_hostname_input: str
```

- *Type:* str

---

##### `server_port_input`<sup>Optional</sup> <a name="server_port_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPortInput"></a>

```python
server_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_hostname`<sup>Required</sup> <a name="server_hostname" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname"></a>

```python
server_hostname: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncStorageSystemServerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerConfiguration">DatasyncStorageSystemServerConfiguration</a>

---


### DatasyncStorageSystemServerCredentialsOutputReference <a name="DatasyncStorageSystemServerCredentialsOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncStorageSystemServerCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemServerCredentials">DatasyncStorageSystemServerCredentials</a>

---


### DatasyncStorageSystemTagsList <a name="DatasyncStorageSystemTagsList" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncStorageSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatasyncStorageSystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>]

---


### DatasyncStorageSystemTagsOutputReference <a name="DatasyncStorageSystemTagsOutputReference" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datasync_storage_system

datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatasyncStorageSystemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncStorageSystem.DatasyncStorageSystemTags">DatasyncStorageSystemTags</a>

---



