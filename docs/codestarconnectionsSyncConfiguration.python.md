# `codestarconnectionsSyncConfiguration` Submodule <a name="`codestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsSyncConfiguration <a name="CodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  branch: str,
  config_file: str,
  repository_link_id: str,
  resource_name: str,
  role_arn: str,
  sync_type: str,
  publish_deployment_status: str = None,
  trigger_resource_update_on: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.branch">branch</a></code> | <code>str</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.configFile">config_file</a></code> | <code>str</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.repositoryLinkId">repository_link_id</a></code> | <code>str</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.syncType">sync_type</a></code> | <code>str</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.publishDeploymentStatus">publish_deployment_status</a></code> | <code>str</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.triggerResourceUpdateOn">trigger_resource_update_on</a></code> | <code>str</code> | When to trigger Git sync to begin the stack update. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.branch"></a>

- *Type:* str

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `config_file`<sup>Required</sup> <a name="config_file" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.configFile"></a>

- *Type:* str

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `repository_link_id`<sup>Required</sup> <a name="repository_link_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.repositoryLinkId"></a>

- *Type:* str

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.resourceName"></a>

- *Type:* str

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.roleArn"></a>

- *Type:* str

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `sync_type`<sup>Required</sup> <a name="sync_type" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.syncType"></a>

- *Type:* str

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `publish_deployment_status`<sup>Optional</sup> <a name="publish_deployment_status" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.publishDeploymentStatus"></a>

- *Type:* str

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `trigger_resource_update_on`<sup>Optional</sup> <a name="trigger_resource_update_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.triggerResourceUpdateOn"></a>

- *Type:* str

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus">reset_publish_deployment_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn">reset_trigger_resource_update_on</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_publish_deployment_status` <a name="reset_publish_deployment_status" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus"></a>

```python
def reset_publish_deployment_status() -> None
```

##### `reset_trigger_resource_update_on` <a name="reset_trigger_resource_update_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn"></a>

```python
def reset_trigger_resource_update_on() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodestarconnectionsSyncConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput">config_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput">publish_deployment_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput">repository_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput">sync_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput">trigger_resource_update_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile">config_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">publish_deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId">repository_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType">sync_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">trigger_resource_update_on</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `config_file_input`<sup>Optional</sup> <a name="config_file_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput"></a>

```python
config_file_input: str
```

- *Type:* str

---

##### `publish_deployment_status_input`<sup>Optional</sup> <a name="publish_deployment_status_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput"></a>

```python
publish_deployment_status_input: str
```

- *Type:* str

---

##### `repository_link_id_input`<sup>Optional</sup> <a name="repository_link_id_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput"></a>

```python
repository_link_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sync_type_input`<sup>Optional</sup> <a name="sync_type_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput"></a>

```python
sync_type_input: str
```

- *Type:* str

---

##### `trigger_resource_update_on_input`<sup>Optional</sup> <a name="trigger_resource_update_on_input" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput"></a>

```python
trigger_resource_update_on_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `config_file`<sup>Required</sup> <a name="config_file" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile"></a>

```python
config_file: str
```

- *Type:* str

---

##### `publish_deployment_status`<sup>Required</sup> <a name="publish_deployment_status" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```python
publish_deployment_status: str
```

- *Type:* str

---

##### `repository_link_id`<sup>Required</sup> <a name="repository_link_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```python
repository_link_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sync_type`<sup>Required</sup> <a name="sync_type" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType"></a>

```python
sync_type: str
```

- *Type:* str

---

##### `trigger_resource_update_on`<sup>Required</sup> <a name="trigger_resource_update_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```python
trigger_resource_update_on: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsSyncConfigurationConfig <a name="CodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codestarconnections_sync_configuration

codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  branch: str,
  config_file: str,
  repository_link_id: str,
  resource_name: str,
  role_arn: str,
  sync_type: str,
  publish_deployment_status: str = None,
  trigger_resource_update_on: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch">branch</a></code> | <code>str</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile">config_file</a></code> | <code>str</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId">repository_link_id</a></code> | <code>str</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName">resource_name</a></code> | <code>str</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType">sync_type</a></code> | <code>str</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus">publish_deployment_status</a></code> | <code>str</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn">trigger_resource_update_on</a></code> | <code>str</code> | When to trigger Git sync to begin the stack update. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch"></a>

```python
branch: str
```

- *Type:* str

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `config_file`<sup>Required</sup> <a name="config_file" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile"></a>

```python
config_file: str
```

- *Type:* str

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `repository_link_id`<sup>Required</sup> <a name="repository_link_id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId"></a>

```python
repository_link_id: str
```

- *Type:* str

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `sync_type`<sup>Required</sup> <a name="sync_type" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType"></a>

```python
sync_type: str
```

- *Type:* str

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `publish_deployment_status`<sup>Optional</sup> <a name="publish_deployment_status" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus"></a>

```python
publish_deployment_status: str
```

- *Type:* str

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `trigger_resource_update_on`<sup>Optional</sup> <a name="trigger_resource_update_on" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn"></a>

```python
trigger_resource_update_on: str
```

- *Type:* str

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---



