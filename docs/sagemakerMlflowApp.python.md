# `sagemakerMlflowApp` Submodule <a name="`sagemakerMlflowApp` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowApp <a name="SagemakerMlflowApp" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app awscc_sagemaker_mlflow_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_store_uri: str,
  name: str,
  role_arn: str,
  model_registration_mode: str = None,
  tags: IResolvable | typing.List[SagemakerMlflowAppTags] = None,
  weekly_maintenance_window_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | The S3 URI for a general purpose bucket to use as the MLflow App artifact store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]</code> | Tags to associate with the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.artifactStoreUri"></a>

- *Type:* str

The S3 URI for a general purpose bucket to use as the MLflow App artifact store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.name"></a>

- *Type:* str

The name of the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}

---

##### `model_registration_mode`<sup>Optional</sup> <a name="model_registration_mode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.modelRegistrationMode"></a>

- *Type:* str

Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]

Tags to associate with the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* str

The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled.

For example: Tue:03:30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode">reset_model_registration_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart">reset_weekly_maintenance_window_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerMlflowAppTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]

---

##### `reset_model_registration_mode` <a name="reset_model_registration_mode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode"></a>

```python
def reset_model_registration_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_weekly_maintenance_window_start` <a name="reset_weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart"></a>

```python
def reset_weekly_maintenance_window_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerMlflowApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerMlflowApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowAppId">mlflow_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowVersion">mlflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList">SagemakerMlflowAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput">artifact_store_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput">model_registration_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput">weekly_maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `mlflow_app_id`<sup>Required</sup> <a name="mlflow_app_id" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowAppId"></a>

```python
mlflow_app_id: str
```

- *Type:* str

---

##### `mlflow_version`<sup>Required</sup> <a name="mlflow_version" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.mlflowVersion"></a>

```python
mlflow_version: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tags"></a>

```python
tags: SagemakerMlflowAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList">SagemakerMlflowAppTagsList</a>

---

##### `artifact_store_uri_input`<sup>Optional</sup> <a name="artifact_store_uri_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput"></a>

```python
artifact_store_uri_input: str
```

- *Type:* str

---

##### `model_registration_mode_input`<sup>Optional</sup> <a name="model_registration_mode_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput"></a>

```python
model_registration_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerMlflowAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]

---

##### `weekly_maintenance_window_start_input`<sup>Optional</sup> <a name="weekly_maintenance_window_start_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput"></a>

```python
weekly_maintenance_window_start_input: str
```

- *Type:* str

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

---

##### `model_registration_mode`<sup>Required</sup> <a name="model_registration_mode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode"></a>

```python
model_registration_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start`<sup>Required</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowAppConfig <a name="SagemakerMlflowAppConfig" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_store_uri: str,
  name: str,
  role_arn: str,
  model_registration_mode: str = None,
  tags: IResolvable | typing.List[SagemakerMlflowAppTags] = None,
  weekly_maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | The S3 URI for a general purpose bucket to use as the MLflow App artifact store. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name">name</a></code> | <code>str</code> | The name of the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode">model_registration_mode</a></code> | <code>str</code> | Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]</code> | Tags to associate with the MLflow App. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

The S3 URI for a general purpose bucket to use as the MLflow App artifact store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}

---

##### `model_registration_mode`<sup>Optional</sup> <a name="model_registration_mode" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode"></a>

```python
model_registration_mode: str
```

- *Type:* str

Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerMlflowAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]

Tags to associate with the MLflow App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled.

For example: Tue:03:30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}

---

### SagemakerMlflowAppTags <a name="SagemakerMlflowAppTags" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#key SagemakerMlflowApp#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#value SagemakerMlflowApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#key SagemakerMlflowApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_mlflow_app#value SagemakerMlflowApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowAppTagsList <a name="SagemakerMlflowAppTagsList" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerMlflowAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerMlflowAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>]

---


### SagemakerMlflowAppTagsOutputReference <a name="SagemakerMlflowAppTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_app

sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerMlflowAppTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowApp.SagemakerMlflowAppTags">SagemakerMlflowAppTags</a>

---



