# `ecsDaemon` Submodule <a name="`ecsDaemon` Submodule" id="@cdktn/provider-awscc.ecsDaemon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsDaemon <a name="EcsDaemon" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon awscc_ecs_daemon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemon(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_provider_arns: typing.List[str] = None,
  cluster_arn: str = None,
  daemon_name: str = None,
  daemon_task_definition_arn: str = None,
  deployment_configuration: EcsDaemonDeploymentConfiguration = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  propagate_tags: str = None,
  tags: IResolvable | typing.List[EcsDaemonTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns">capacity_provider_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the cluster that the daemon is running in. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonName">daemon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn">daemon_task_definition_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the daemon task definition used by this revision. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | The deployment configuration used for this daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon ECS managed tags are turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the execute command functionality is turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags">propagate_tags</a></code> | <code>str</code> | Specifies whether tags are propagated from the daemon to the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_provider_arns`<sup>Optional</sup> <a name="capacity_provider_arns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.capacityProviderArns"></a>

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.clusterArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the cluster that the daemon is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}

---

##### `daemon_name`<sup>Optional</sup> <a name="daemon_name" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}.

---

##### `daemon_task_definition_arn`<sup>Optional</sup> <a name="daemon_task_definition_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.daemonTaskDefinitionArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the daemon task definition used by this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

The deployment configuration used for this daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableEcsManagedTags"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.enableExecuteCommand"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the execute command functionality is turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.propagateTags"></a>

- *Type:* str

Specifies whether tags are propagated from the daemon to the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration">put_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns">reset_capacity_provider_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn">reset_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName">reset_daemon_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn">reset_daemon_task_definition_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration">reset_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_deployment_configuration` <a name="put_deployment_configuration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration"></a>

```python
def put_deployment_configuration(
  alarms: EcsDaemonDeploymentConfigurationAlarms = None,
  bake_time_in_minutes: typing.Union[int, float] = None,
  drain_percent: typing.Union[int, float] = None
) -> None
```

###### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.alarms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

The CloudWatch alarm configuration for the daemon deployment.

When alarms are triggered during a deployment, the deployment can be automatically rolled back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#alarms EcsDaemon#alarms}

---

###### `bake_time_in_minutes`<sup>Optional</sup> <a name="bake_time_in_minutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.bakeTimeInMinutes"></a>

- *Type:* typing.Union[int, float]

The amount of time (in minutes) to wait after a successful deployment step before proceeding.

This allows time to monitor for issues before continuing. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}

---

###### `drain_percent`<sup>Optional</sup> <a name="drain_percent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putDeploymentConfiguration.parameter.drainPercent"></a>

- *Type:* typing.Union[int, float]

The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EcsDaemonTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]

---

##### `reset_capacity_provider_arns` <a name="reset_capacity_provider_arns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetCapacityProviderArns"></a>

```python
def reset_capacity_provider_arns() -> None
```

##### `reset_cluster_arn` <a name="reset_cluster_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetClusterArn"></a>

```python
def reset_cluster_arn() -> None
```

##### `reset_daemon_name` <a name="reset_daemon_name" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonName"></a>

```python
def reset_daemon_name() -> None
```

##### `reset_daemon_task_definition_arn` <a name="reset_daemon_task_definition_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDaemonTaskDefinitionArn"></a>

```python
def reset_daemon_task_definition_arn() -> None
```

##### `reset_deployment_configuration` <a name="reset_deployment_configuration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetDeploymentConfiguration"></a>

```python
def reset_deployment_configuration() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemon.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemon.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemon.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemon.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EcsDaemon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcsDaemon to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcsDaemon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcsDaemon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn">daemon_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus">daemon_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn">deployment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput">capacity_provider_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput">daemon_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput">daemon_task_definition_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput">deployment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns">capacity_provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName">daemon_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn">daemon_task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `daemon_arn`<sup>Required</sup> <a name="daemon_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonArn"></a>

```python
daemon_arn: str
```

- *Type:* str

---

##### `daemon_status`<sup>Required</sup> <a name="daemon_status" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonStatus"></a>

```python
daemon_status: str
```

- *Type:* str

---

##### `deployment_arn`<sup>Required</sup> <a name="deployment_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentArn"></a>

```python
deployment_arn: str
```

- *Type:* str

---

##### `deployment_configuration`<sup>Required</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfiguration"></a>

```python
deployment_configuration: EcsDaemonDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference">EcsDaemonDeploymentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tags"></a>

```python
tags: EcsDaemonTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList">EcsDaemonTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `capacity_provider_arns_input`<sup>Optional</sup> <a name="capacity_provider_arns_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArnsInput"></a>

```python
capacity_provider_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `daemon_name_input`<sup>Optional</sup> <a name="daemon_name_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonNameInput"></a>

```python
daemon_name_input: str
```

- *Type:* str

---

##### `daemon_task_definition_arn_input`<sup>Optional</sup> <a name="daemon_task_definition_arn_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArnInput"></a>

```python
daemon_task_definition_arn_input: str
```

- *Type:* str

---

##### `deployment_configuration_input`<sup>Optional</sup> <a name="deployment_configuration_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.deploymentConfigurationInput"></a>

```python
deployment_configuration_input: IResolvable | EcsDaemonDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EcsDaemonTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]

---

##### `capacity_provider_arns`<sup>Required</sup> <a name="capacity_provider_arns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.capacityProviderArns"></a>

```python
capacity_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `daemon_name`<sup>Required</sup> <a name="daemon_name" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonName"></a>

```python
daemon_name: str
```

- *Type:* str

---

##### `daemon_task_definition_arn`<sup>Required</sup> <a name="daemon_task_definition_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.daemonTaskDefinitionArn"></a>

```python
daemon_task_definition_arn: str
```

- *Type:* str

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemon.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcsDaemonConfig <a name="EcsDaemonConfig" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capacity_provider_arns: typing.List[str] = None,
  cluster_arn: str = None,
  daemon_name: str = None,
  daemon_task_definition_arn: str = None,
  deployment_configuration: EcsDaemonDeploymentConfiguration = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  propagate_tags: str = None,
  tags: IResolvable | typing.List[EcsDaemonTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns">capacity_provider_arns</a></code> | <code>typing.List[str]</code> | The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the cluster that the daemon is running in. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName">daemon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn">daemon_task_definition_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the daemon task definition used by this revision. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | The deployment configuration used for this daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon ECS managed tags are turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the execute command functionality is turned on for the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Specifies whether tags are propagated from the daemon to the daemon tasks. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_provider_arns`<sup>Optional</sup> <a name="capacity_provider_arns" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.capacityProviderArns"></a>

```python
capacity_provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#capacity_provider_arns EcsDaemon#capacity_provider_arns}

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the cluster that the daemon is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#cluster_arn EcsDaemon#cluster_arn}

---

##### `daemon_name`<sup>Optional</sup> <a name="daemon_name" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonName"></a>

```python
daemon_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_name EcsDaemon#daemon_name}.

---

##### `daemon_task_definition_arn`<sup>Optional</sup> <a name="daemon_task_definition_arn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.daemonTaskDefinitionArn"></a>

```python
daemon_task_definition_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the daemon task definition used by this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#daemon_task_definition_arn EcsDaemon#daemon_task_definition_arn}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.deploymentConfiguration"></a>

```python
deployment_configuration: EcsDaemonDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

The deployment configuration used for this daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#deployment_configuration EcsDaemon#deployment_configuration}

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable_ecs_managed_tags EcsDaemon#enable_ecs_managed_tags}

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the execute command functionality is turned on for the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable_execute_command EcsDaemon#enable_execute_command}

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Specifies whether tags are propagated from the daemon to the daemon tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#propagate_tags EcsDaemon#propagate_tags}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EcsDaemonTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#tags EcsDaemon#tags}.

---

### EcsDaemonDeploymentConfiguration <a name="EcsDaemonDeploymentConfiguration" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonDeploymentConfiguration(
  alarms: EcsDaemonDeploymentConfigurationAlarms = None,
  bake_time_in_minutes: typing.Union[int, float] = None,
  drain_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | The CloudWatch alarm configuration for the daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes">bake_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The amount of time (in minutes) to wait after a successful deployment step before proceeding. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent">drain_percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.alarms"></a>

```python
alarms: EcsDaemonDeploymentConfigurationAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

The CloudWatch alarm configuration for the daemon deployment.

When alarms are triggered during a deployment, the deployment can be automatically rolled back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#alarms EcsDaemon#alarms}

---

##### `bake_time_in_minutes`<sup>Optional</sup> <a name="bake_time_in_minutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.bakeTimeInMinutes"></a>

```python
bake_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time (in minutes) to wait after a successful deployment step before proceeding.

This allows time to monitor for issues before continuing. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#bake_time_in_minutes EcsDaemon#bake_time_in_minutes}

---

##### `drain_percent`<sup>Optional</sup> <a name="drain_percent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration.property.drainPercent"></a>

```python
drain_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#drain_percent EcsDaemon#drain_percent}

---

### EcsDaemonDeploymentConfigurationAlarms <a name="EcsDaemonDeploymentConfigurationAlarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonDeploymentConfigurationAlarms(
  alarm_names: typing.List[str] = None,
  enable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | The CloudWatch alarm names to monitor during a daemon deployment. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``. |

---

##### `alarm_names`<sup>Optional</sup> <a name="alarm_names" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

The CloudWatch alarm names to monitor during a daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}

---

### EcsDaemonTags <a name="EcsDaemonTags" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key">key</a></code> | <code>str</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value">value</a></code> | <code>str</code> | The optional part of a key-value pair that make up a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.key"></a>

```python
key: str
```

- *Type:* str

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#key EcsDaemon#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags.property.value"></a>

```python
value: str
```

- *Type:* str

The optional part of a key-value pair that make up a tag.

A `value` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#value EcsDaemon#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsDaemonDeploymentConfigurationAlarmsOutputReference <a name="EcsDaemonDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames">reset_alarm_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_names` <a name="reset_alarm_names" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetAlarmNames"></a>

```python
def reset_alarm_names() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput">alarm_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_names_input`<sup>Optional</sup> <a name="alarm_names_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNamesInput"></a>

```python
alarm_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonDeploymentConfigurationAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---


### EcsDaemonDeploymentConfigurationOutputReference <a name="EcsDaemonDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms">put_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes">reset_bake_time_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent">reset_drain_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_alarms` <a name="put_alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms"></a>

```python
def put_alarms(
  alarm_names: typing.List[str] = None,
  enable: bool | IResolvable = None
) -> None
```

###### `alarm_names`<sup>Optional</sup> <a name="alarm_names" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms.parameter.alarmNames"></a>

- *Type:* typing.List[str]

The CloudWatch alarm names to monitor during a daemon deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#alarm_names EcsDaemon#alarm_names}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.putAlarms.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecs_daemon#enable EcsDaemon#enable}

---

##### `reset_alarms` <a name="reset_alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_bake_time_in_minutes` <a name="reset_bake_time_in_minutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetBakeTimeInMinutes"></a>

```python
def reset_bake_time_in_minutes() -> None
```

##### `reset_drain_percent` <a name="reset_drain_percent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.resetDrainPercent"></a>

```python
def reset_drain_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput">alarms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput">bake_time_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput">drain_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">bake_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent">drain_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarms"></a>

```python
alarms: EcsDaemonDeploymentConfigurationAlarmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarmsOutputReference">EcsDaemonDeploymentConfigurationAlarmsOutputReference</a>

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.alarmsInput"></a>

```python
alarms_input: IResolvable | EcsDaemonDeploymentConfigurationAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationAlarms">EcsDaemonDeploymentConfigurationAlarms</a>

---

##### `bake_time_in_minutes_input`<sup>Optional</sup> <a name="bake_time_in_minutes_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutesInput"></a>

```python
bake_time_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drain_percent_input`<sup>Optional</sup> <a name="drain_percent_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercentInput"></a>

```python
drain_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bake_time_in_minutes`<sup>Required</sup> <a name="bake_time_in_minutes" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```python
bake_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drain_percent`<sup>Required</sup> <a name="drain_percent" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.drainPercent"></a>

```python
drain_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonDeploymentConfiguration">EcsDaemonDeploymentConfiguration</a>

---


### EcsDaemonTagsList <a name="EcsDaemonTagsList" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcsDaemonTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EcsDaemonTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>]

---


### EcsDaemonTagsOutputReference <a name="EcsDaemonTagsOutputReference" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ecs_daemon

ecsDaemon.EcsDaemonTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ecsDaemon.EcsDaemonTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EcsDaemonTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecsDaemon.EcsDaemonTags">EcsDaemonTags</a>

---



