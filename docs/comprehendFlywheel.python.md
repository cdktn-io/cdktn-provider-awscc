# `comprehendFlywheel` Submodule <a name="`comprehendFlywheel` Submodule" id="@cdktn/provider-awscc.comprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendFlywheel <a name="ComprehendFlywheel" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_access_role_arn: str,
  data_lake_s3_uri: str,
  flywheel_name: str,
  active_model_arn: str = None,
  data_security_config: ComprehendFlywheelDataSecurityConfig = None,
  model_type: str = None,
  tags: IResolvable | typing.List[ComprehendFlywheelTags] = None,
  task_config: ComprehendFlywheelTaskConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataLakeS3Uri">data_lake_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.flywheelName">flywheel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.activeModelArn">active_model_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataSecurityConfig">data_security_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.taskConfig">task_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `data_lake_s3_uri`<sup>Required</sup> <a name="data_lake_s3_uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataLakeS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `flywheel_name`<sup>Required</sup> <a name="flywheel_name" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.flywheelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `active_model_arn`<sup>Optional</sup> <a name="active_model_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.activeModelArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `data_security_config`<sup>Optional</sup> <a name="data_security_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.dataSecurityConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `model_type`<sup>Optional</sup> <a name="model_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.modelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `task_config`<sup>Optional</sup> <a name="task_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.taskConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig">put_data_security_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig">put_task_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn">reset_active_model_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig">reset_data_security_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType">reset_model_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig">reset_task_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_security_config` <a name="put_data_security_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig"></a>

```python
def put_data_security_config(
  data_lake_kms_key_id: str = None,
  model_kms_key_id: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendFlywheelDataSecurityConfigVpcConfig = None
) -> None
```

###### `data_lake_kms_key_id`<sup>Optional</sup> <a name="data_lake_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.dataLakeKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

###### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.modelKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

###### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.volumeKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

###### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ComprehendFlywheelTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]

---

##### `put_task_config` <a name="put_task_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig"></a>

```python
def put_task_config(
  document_classification_config: ComprehendFlywheelTaskConfigDocumentClassificationConfig = None,
  entity_recognition_config: ComprehendFlywheelTaskConfigEntityRecognitionConfig = None,
  language_code: str = None
) -> None
```

###### `document_classification_config`<sup>Optional</sup> <a name="document_classification_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.documentClassificationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

###### `entity_recognition_config`<sup>Optional</sup> <a name="entity_recognition_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.entityRecognitionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

##### `reset_active_model_arn` <a name="reset_active_model_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn"></a>

```python
def reset_active_model_arn() -> None
```

##### `reset_data_security_config` <a name="reset_data_security_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig"></a>

```python
def reset_data_security_config() -> None
```

##### `reset_model_type` <a name="reset_model_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType"></a>

```python
def reset_model_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_task_config` <a name="reset_task_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig"></a>

```python
def reset_task_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComprehendFlywheel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig">data_security_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig">task_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput">active_model_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput">data_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput">data_lake_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput">data_security_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput">flywheel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput">model_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput">task_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn">active_model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri">data_lake_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName">flywheel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_security_config`<sup>Required</sup> <a name="data_security_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig"></a>

```python
data_security_config: ComprehendFlywheelDataSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags"></a>

```python
tags: ComprehendFlywheelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a>

---

##### `task_config`<sup>Required</sup> <a name="task_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig"></a>

```python
task_config: ComprehendFlywheelTaskConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a>

---

##### `active_model_arn_input`<sup>Optional</sup> <a name="active_model_arn_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput"></a>

```python
active_model_arn_input: str
```

- *Type:* str

---

##### `data_access_role_arn_input`<sup>Optional</sup> <a name="data_access_role_arn_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput"></a>

```python
data_access_role_arn_input: str
```

- *Type:* str

---

##### `data_lake_s3_uri_input`<sup>Optional</sup> <a name="data_lake_s3_uri_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput"></a>

```python
data_lake_s3_uri_input: str
```

- *Type:* str

---

##### `data_security_config_input`<sup>Optional</sup> <a name="data_security_config_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput"></a>

```python
data_security_config_input: IResolvable | ComprehendFlywheelDataSecurityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `flywheel_name_input`<sup>Optional</sup> <a name="flywheel_name_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput"></a>

```python
flywheel_name_input: str
```

- *Type:* str

---

##### `model_type_input`<sup>Optional</sup> <a name="model_type_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput"></a>

```python
model_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ComprehendFlywheelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]

---

##### `task_config_input`<sup>Optional</sup> <a name="task_config_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput"></a>

```python
task_config_input: IResolvable | ComprehendFlywheelTaskConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `active_model_arn`<sup>Required</sup> <a name="active_model_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn"></a>

```python
active_model_arn: str
```

- *Type:* str

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

---

##### `data_lake_s3_uri`<sup>Required</sup> <a name="data_lake_s3_uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri"></a>

```python
data_lake_s3_uri: str
```

- *Type:* str

---

##### `flywheel_name`<sup>Required</sup> <a name="flywheel_name" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName"></a>

```python
flywheel_name: str
```

- *Type:* str

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendFlywheelConfig <a name="ComprehendFlywheelConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_access_role_arn: str,
  data_lake_s3_uri: str,
  flywheel_name: str,
  active_model_arn: str = None,
  data_security_config: ComprehendFlywheelDataSecurityConfig = None,
  model_type: str = None,
  tags: IResolvable | typing.List[ComprehendFlywheelTags] = None,
  task_config: ComprehendFlywheelTaskConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn">data_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri">data_lake_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName">flywheel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn">active_model_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig">data_security_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig">task_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_access_role_arn`<sup>Required</sup> <a name="data_access_role_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn"></a>

```python
data_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `data_lake_s3_uri`<sup>Required</sup> <a name="data_lake_s3_uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri"></a>

```python
data_lake_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `flywheel_name`<sup>Required</sup> <a name="flywheel_name" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName"></a>

```python
flywheel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `active_model_arn`<sup>Optional</sup> <a name="active_model_arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn"></a>

```python
active_model_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `data_security_config`<sup>Optional</sup> <a name="data_security_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig"></a>

```python
data_security_config: ComprehendFlywheelDataSecurityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `model_type`<sup>Optional</sup> <a name="model_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ComprehendFlywheelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `task_config`<sup>Optional</sup> <a name="task_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig"></a>

```python
task_config: ComprehendFlywheelTaskConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

### ComprehendFlywheelDataSecurityConfig <a name="ComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelDataSecurityConfig(
  data_lake_kms_key_id: str = None,
  model_kms_key_id: str = None,
  volume_kms_key_id: str = None,
  vpc_config: ComprehendFlywheelDataSecurityConfigVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId">data_lake_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}. |

---

##### `data_lake_kms_key_id`<sup>Optional</sup> <a name="data_lake_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId"></a>

```python
data_lake_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

##### `model_kms_key_id`<sup>Optional</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

##### `volume_kms_key_id`<sup>Optional</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig"></a>

```python
vpc_config: ComprehendFlywheelDataSecurityConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

### ComprehendFlywheelDataSecurityConfigVpcConfig <a name="ComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

### ComprehendFlywheelTags <a name="ComprehendFlywheelTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}.

---

### ComprehendFlywheelTaskConfig <a name="ComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfig(
  document_classification_config: ComprehendFlywheelTaskConfigDocumentClassificationConfig = None,
  entity_recognition_config: ComprehendFlywheelTaskConfigEntityRecognitionConfig = None,
  language_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig">document_classification_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig">entity_recognition_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}. |

---

##### `document_classification_config`<sup>Optional</sup> <a name="document_classification_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig"></a>

```python
document_classification_config: ComprehendFlywheelTaskConfigDocumentClassificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

##### `entity_recognition_config`<sup>Optional</sup> <a name="entity_recognition_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig"></a>

```python
entity_recognition_config: ComprehendFlywheelTaskConfigEntityRecognitionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

### ComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig(
  labels: typing.List[str] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig(
  entity_types: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}. |

---

##### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendFlywheelDataSecurityConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId">reset_data_lake_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId">reset_model_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId">reset_volume_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

##### `reset_data_lake_kms_key_id` <a name="reset_data_lake_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId"></a>

```python
def reset_data_lake_kms_key_id() -> None
```

##### `reset_model_kms_key_id` <a name="reset_model_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId"></a>

```python
def reset_model_kms_key_id() -> None
```

##### `reset_volume_kms_key_id` <a name="reset_volume_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId"></a>

```python
def reset_volume_kms_key_id() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput">data_lake_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput">model_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput">volume_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">data_lake_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">model_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `data_lake_kms_key_id_input`<sup>Optional</sup> <a name="data_lake_kms_key_id_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput"></a>

```python
data_lake_kms_key_id_input: str
```

- *Type:* str

---

##### `model_kms_key_id_input`<sup>Optional</sup> <a name="model_kms_key_id_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput"></a>

```python
model_kms_key_id_input: str
```

- *Type:* str

---

##### `volume_kms_key_id_input`<sup>Optional</sup> <a name="volume_kms_key_id_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```python
volume_kms_key_id_input: str
```

- *Type:* str

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | ComprehendFlywheelDataSecurityConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `data_lake_kms_key_id`<sup>Required</sup> <a name="data_lake_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```python
data_lake_kms_key_id: str
```

- *Type:* str

---

##### `model_kms_key_id`<sup>Required</sup> <a name="model_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```python
model_kms_key_id: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelDataSecurityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---


### ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelDataSecurityConfigVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---


### ComprehendFlywheelTagsList <a name="ComprehendFlywheelTagsList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendFlywheelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendFlywheelTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>]

---


### ComprehendFlywheelTagsOutputReference <a name="ComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>

---


### ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelTaskConfigDocumentClassificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes">reset_entity_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]

---

##### `reset_entity_types` <a name="reset_entity_types" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes"></a>

```python
def reset_entity_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```python
entity_types: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---


### ComprehendFlywheelTaskConfigOutputReference <a name="ComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import comprehend_flywheel

comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig">put_document_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig">put_entity_recognition_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig">reset_document_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig">reset_entity_recognition_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_document_classification_config` <a name="put_document_classification_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig"></a>

```python
def put_document_classification_config(
  labels: typing.List[str] = None,
  mode: str = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.labels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

##### `put_entity_recognition_config` <a name="put_entity_recognition_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig"></a>

```python
def put_entity_recognition_config(
  entity_types: IResolvable | typing.List[ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes] = None
) -> None
```

###### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

##### `reset_document_classification_config` <a name="reset_document_classification_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig"></a>

```python
def reset_document_classification_config() -> None
```

##### `reset_entity_recognition_config` <a name="reset_entity_recognition_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig"></a>

```python
def reset_entity_recognition_config() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">document_classification_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">entity_recognition_config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput">document_classification_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput">entity_recognition_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_classification_config`<sup>Required</sup> <a name="document_classification_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```python
document_classification_config: ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `entity_recognition_config`<sup>Required</sup> <a name="entity_recognition_config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```python
entity_recognition_config: ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `document_classification_config_input`<sup>Optional</sup> <a name="document_classification_config_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput"></a>

```python
document_classification_config_input: IResolvable | ComprehendFlywheelTaskConfigDocumentClassificationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `entity_recognition_config_input`<sup>Optional</sup> <a name="entity_recognition_config_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput"></a>

```python
entity_recognition_config_input: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComprehendFlywheelTaskConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---



