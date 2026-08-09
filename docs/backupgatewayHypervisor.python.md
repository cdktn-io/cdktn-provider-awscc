# `backupgatewayHypervisor` Submodule <a name="`backupgatewayHypervisor` Submodule" id="@cdktn/provider-awscc.backupgatewayHypervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupgatewayHypervisor <a name="BackupgatewayHypervisor" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor awscc_backupgateway_hypervisor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  host: str = None,
  kms_key_arn: str = None,
  log_group_arn: str = None,
  name: str = None,
  password: str = None,
  tags: IResolvable | typing.List[BackupgatewayHypervisorTags] = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}.

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.logGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BackupgatewayHypervisorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]

---

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BackupgatewayHypervisor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BackupgatewayHypervisor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupgatewayHypervisor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupgatewayHypervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupgatewayHypervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hypervisorArn">hypervisor_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList">BackupgatewayHypervisorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hypervisor_arn`<sup>Required</sup> <a name="hypervisor_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hypervisorArn"></a>

```python
hypervisor_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tags"></a>

```python
tags: BackupgatewayHypervisorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList">BackupgatewayHypervisorTagsList</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BackupgatewayHypervisorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupgatewayHypervisorConfig <a name="BackupgatewayHypervisorConfig" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  host: str = None,
  kms_key_arn: str = None,
  log_group_arn: str = None,
  name: str = None,
  password: str = None,
  tags: IResolvable | typing.List[BackupgatewayHypervisorTags] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#host BackupgatewayHypervisor#host}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#kms_key_arn BackupgatewayHypervisor#kms_key_arn}.

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#log_group_arn BackupgatewayHypervisor#log_group_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#name BackupgatewayHypervisor#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#password BackupgatewayHypervisor#password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BackupgatewayHypervisorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#tags BackupgatewayHypervisor#tags}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#username BackupgatewayHypervisor#username}.

---

### BackupgatewayHypervisorTags <a name="BackupgatewayHypervisorTags" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.Initializer"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#key BackupgatewayHypervisor#key}. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#value BackupgatewayHypervisor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#key BackupgatewayHypervisor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/backupgateway_hypervisor#value BackupgatewayHypervisor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupgatewayHypervisorTagsList <a name="BackupgatewayHypervisorTagsList" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupgatewayHypervisorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupgatewayHypervisorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>]

---


### BackupgatewayHypervisorTagsOutputReference <a name="BackupgatewayHypervisorTagsOutputReference" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import backupgateway_hypervisor

backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupgatewayHypervisorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupgatewayHypervisor.BackupgatewayHypervisorTags">BackupgatewayHypervisorTags</a>

---



