# `sagemakerMlflowTrackingServer` Submodule <a name="`sagemakerMlflowTrackingServer` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowTrackingServer <a name="SagemakerMlflowTrackingServer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer(
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
  role_arn: str,
  tracking_server_name: str,
  automatic_model_registration: bool | IResolvable = None,
  mlflow_version: str = None,
  tags: IResolvable | typing.List[SagemakerMlflowTrackingServerTags] = None,
  tracking_server_size: str = None,
  weekly_maintenance_window_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | The Amazon S3 URI for MLFlow Tracking Server artifacts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.trackingServerName">tracking_server_name</a></code> | <code>str</code> | The name of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.automaticModelRegistration">automatic_model_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag to enable Automatic SageMaker Model Registration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.mlflowVersion">mlflow_version</a></code> | <code>str</code> | The MLFlow Version used on the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.trackingServerSize">tracking_server_size</a></code> | <code>str</code> | The size of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | The start of the time window for maintenance of the MLFlow Tracking Server in UTC time. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.artifactStoreUri"></a>

- *Type:* str

The Amazon S3 URI for MLFlow Tracking Server artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}

---

##### `tracking_server_name`<sup>Required</sup> <a name="tracking_server_name" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.trackingServerName"></a>

- *Type:* str

The name of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}

---

##### `automatic_model_registration`<sup>Optional</sup> <a name="automatic_model_registration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.automaticModelRegistration"></a>

- *Type:* bool | cdktn.IResolvable

A flag to enable Automatic SageMaker Model Registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}

---

##### `mlflow_version`<sup>Optional</sup> <a name="mlflow_version" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.mlflowVersion"></a>

- *Type:* str

The MLFlow Version used on the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}

---

##### `tracking_server_size`<sup>Optional</sup> <a name="tracking_server_size" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.trackingServerSize"></a>

- *Type:* str

The size of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* str

The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration">reset_automatic_model_registration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion">reset_mlflow_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize">reset_tracking_server_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart">reset_weekly_maintenance_window_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerMlflowTrackingServerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]

---

##### `reset_automatic_model_registration` <a name="reset_automatic_model_registration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration"></a>

```python
def reset_automatic_model_registration() -> None
```

##### `reset_mlflow_version` <a name="reset_mlflow_version" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion"></a>

```python
def reset_mlflow_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tracking_server_size` <a name="reset_tracking_server_size" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize"></a>

```python
def reset_tracking_server_size() -> None
```

##### `reset_weekly_maintenance_window_start` <a name="reset_weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart"></a>

```python
def reset_weekly_maintenance_window_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerMlflowTrackingServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerMlflowTrackingServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn">tracking_server_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput">artifact_store_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput">automatic_model_registration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput">mlflow_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput">tracking_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput">tracking_server_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput">weekly_maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration">automatic_model_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion">mlflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName">tracking_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize">tracking_server_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags"></a>

```python
tags: SagemakerMlflowTrackingServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a>

---

##### `tracking_server_arn`<sup>Required</sup> <a name="tracking_server_arn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn"></a>

```python
tracking_server_arn: str
```

- *Type:* str

---

##### `artifact_store_uri_input`<sup>Optional</sup> <a name="artifact_store_uri_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput"></a>

```python
artifact_store_uri_input: str
```

- *Type:* str

---

##### `automatic_model_registration_input`<sup>Optional</sup> <a name="automatic_model_registration_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput"></a>

```python
automatic_model_registration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mlflow_version_input`<sup>Optional</sup> <a name="mlflow_version_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput"></a>

```python
mlflow_version_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerMlflowTrackingServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]

---

##### `tracking_server_name_input`<sup>Optional</sup> <a name="tracking_server_name_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput"></a>

```python
tracking_server_name_input: str
```

- *Type:* str

---

##### `tracking_server_size_input`<sup>Optional</sup> <a name="tracking_server_size_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput"></a>

```python
tracking_server_size_input: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start_input`<sup>Optional</sup> <a name="weekly_maintenance_window_start_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput"></a>

```python
weekly_maintenance_window_start_input: str
```

- *Type:* str

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

---

##### `automatic_model_registration`<sup>Required</sup> <a name="automatic_model_registration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration"></a>

```python
automatic_model_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mlflow_version`<sup>Required</sup> <a name="mlflow_version" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion"></a>

```python
mlflow_version: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tracking_server_name`<sup>Required</sup> <a name="tracking_server_name" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName"></a>

```python
tracking_server_name: str
```

- *Type:* str

---

##### `tracking_server_size`<sup>Required</sup> <a name="tracking_server_size" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize"></a>

```python
tracking_server_size: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start`<sup>Required</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowTrackingServerConfig <a name="SagemakerMlflowTrackingServerConfig" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_store_uri: str,
  role_arn: str,
  tracking_server_name: str,
  automatic_model_registration: bool | IResolvable = None,
  mlflow_version: str = None,
  tags: IResolvable | typing.List[SagemakerMlflowTrackingServerTags] = None,
  tracking_server_size: str = None,
  weekly_maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri">artifact_store_uri</a></code> | <code>str</code> | The Amazon S3 URI for MLFlow Tracking Server artifacts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName">tracking_server_name</a></code> | <code>str</code> | The name of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration">automatic_model_registration</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag to enable Automatic SageMaker Model Registration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion">mlflow_version</a></code> | <code>str</code> | The MLFlow Version used on the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize">tracking_server_size</a></code> | <code>str</code> | The size of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | The start of the time window for maintenance of the MLFlow Tracking Server in UTC time. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_store_uri`<sup>Required</sup> <a name="artifact_store_uri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri"></a>

```python
artifact_store_uri: str
```

- *Type:* str

The Amazon S3 URI for MLFlow Tracking Server artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}

---

##### `tracking_server_name`<sup>Required</sup> <a name="tracking_server_name" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName"></a>

```python
tracking_server_name: str
```

- *Type:* str

The name of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}

---

##### `automatic_model_registration`<sup>Optional</sup> <a name="automatic_model_registration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration"></a>

```python
automatic_model_registration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag to enable Automatic SageMaker Model Registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}

---

##### `mlflow_version`<sup>Optional</sup> <a name="mlflow_version" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion"></a>

```python
mlflow_version: str
```

- *Type:* str

The MLFlow Version used on the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerMlflowTrackingServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}

---

##### `tracking_server_size`<sup>Optional</sup> <a name="tracking_server_size" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize"></a>

```python
tracking_server_size: str
```

- *Type:* str

The size of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}

---

### SagemakerMlflowTrackingServerTags <a name="SagemakerMlflowTrackingServerTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#key SagemakerMlflowTrackingServer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#value SagemakerMlflowTrackingServer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowTrackingServerTagsList <a name="SagemakerMlflowTrackingServerTagsList" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerMlflowTrackingServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerMlflowTrackingServerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>]

---


### SagemakerMlflowTrackingServerTagsOutputReference <a name="SagemakerMlflowTrackingServerTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_mlflow_tracking_server

sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerMlflowTrackingServerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags">SagemakerMlflowTrackingServerTags</a>

---



