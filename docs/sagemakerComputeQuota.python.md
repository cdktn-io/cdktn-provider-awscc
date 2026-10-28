# `sagemakerComputeQuota` Submodule <a name="`sagemakerComputeQuota` Submodule" id="@cdktn/provider-awscc.sagemakerComputeQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerComputeQuota <a name="SagemakerComputeQuota" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota awscc_sagemaker_compute_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuota(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_arn: str,
  compute_quota_config: SagemakerComputeQuotaComputeQuotaConfig,
  compute_quota_target: SagemakerComputeQuotaComputeQuotaTarget,
  name: str,
  activation_state: str = None,
  description: str = None,
  tags: IResolvable | typing.List[SagemakerComputeQuotaTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.computeQuotaConfig">compute_quota_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.computeQuotaTarget">compute_quota_target</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | The team this compute allocation rule applies to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.activationState">activation_state</a></code> | <code>str</code> | Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-form description of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]</code> | Tags to associate with the compute allocation definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.clusterArn"></a>

- *Type:* str

The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to.

Slurm-orchestrated clusters are rejected by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#cluster_arn SagemakerComputeQuota#cluster_arn}

---

##### `compute_quota_config`<sup>Required</sup> <a name="compute_quota_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.computeQuotaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_config SagemakerComputeQuota#compute_quota_config}

---

##### `compute_quota_target`<sup>Required</sup> <a name="compute_quota_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.computeQuotaTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

The team this compute allocation rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_target SagemakerComputeQuota#compute_quota_target}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.name"></a>

- *Type:* str

The name of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#name SagemakerComputeQuota#name}

---

##### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.activationState"></a>

- *Type:* str

Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#activation_state SagemakerComputeQuota#activation_state}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.description"></a>

- *Type:* str

A free-form description of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#description SagemakerComputeQuota#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]

Tags to associate with the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#tags SagemakerComputeQuota#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig">put_compute_quota_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget">put_compute_quota_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetActivationState">reset_activation_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_quota_config` <a name="put_compute_quota_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig"></a>

```python
def put_compute_quota_config(
  compute_quota_resources: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources] = None,
  preempt_team_tasks: str = None,
  resource_sharing_config: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig = None
) -> None
```

###### `compute_quota_resources`<sup>Optional</sup> <a name="compute_quota_resources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig.parameter.computeQuotaResources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]

Per-instance-type compute quotas for the team.

When VCpu / MemoryInGiB / Accelerators are partially specified, SageMaker auto-fills the remaining fields ratio-proportionally to the underlying instance ? Read may return values the customer did not supply (drift may flag this).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_resources SagemakerComputeQuota#compute_quota_resources}

---

###### `preempt_team_tasks`<sup>Optional</sup> <a name="preempt_team_tasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig.parameter.preemptTeamTasks"></a>

- *Type:* str

Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#preempt_team_tasks SagemakerComputeQuota#preempt_team_tasks}

---

###### `resource_sharing_config`<sup>Optional</sup> <a name="resource_sharing_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaConfig.parameter.resourceSharingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#resource_sharing_config SagemakerComputeQuota#resource_sharing_config}

---

##### `put_compute_quota_target` <a name="put_compute_quota_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget"></a>

```python
def put_compute_quota_target(
  team_name: str,
  fair_share_weight: typing.Union[int, float] = None
) -> None
```

###### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget.parameter.teamName"></a>

- *Type:* str

The name of the team.

Materialized as Kubernetes namespace 'hyperpod-ns-<TeamName>' on the EKS cluster, so the value must satisfy RFC 1123 namespace constraints. Reassignment is not supported (createOnly).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#team_name SagemakerComputeQuota#team_name}

---

###### `fair_share_weight`<sup>Optional</sup> <a name="fair_share_weight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putComputeQuotaTarget.parameter.fairShareWeight"></a>

- *Type:* typing.Union[int, float]

Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#fair_share_weight SagemakerComputeQuota#fair_share_weight}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerComputeQuotaTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]

---

##### `reset_activation_state` <a name="reset_activation_state" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetActivationState"></a>

```python
def reset_activation_state() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerComputeQuota resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuota.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuota.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuota.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuota.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerComputeQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerComputeQuota to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerComputeQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerComputeQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaArn">compute_quota_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfig">compute_quota_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaId">compute_quota_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTarget">compute_quota_target</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference">SagemakerComputeQuotaComputeQuotaTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaVersion">compute_quota_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList">SagemakerComputeQuotaTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationStateInput">activation_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfigInput">compute_quota_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTargetInput">compute_quota_target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationState">activation_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_quota_arn`<sup>Required</sup> <a name="compute_quota_arn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaArn"></a>

```python
compute_quota_arn: str
```

- *Type:* str

---

##### `compute_quota_config`<sup>Required</sup> <a name="compute_quota_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfig"></a>

```python
compute_quota_config: SagemakerComputeQuotaComputeQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigOutputReference</a>

---

##### `compute_quota_id`<sup>Required</sup> <a name="compute_quota_id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaId"></a>

```python
compute_quota_id: str
```

- *Type:* str

---

##### `compute_quota_target`<sup>Required</sup> <a name="compute_quota_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTarget"></a>

```python
compute_quota_target: SagemakerComputeQuotaComputeQuotaTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference">SagemakerComputeQuotaComputeQuotaTargetOutputReference</a>

---

##### `compute_quota_version`<sup>Required</sup> <a name="compute_quota_version" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaVersion"></a>

```python
compute_quota_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tags"></a>

```python
tags: SagemakerComputeQuotaTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList">SagemakerComputeQuotaTagsList</a>

---

##### `activation_state_input`<sup>Optional</sup> <a name="activation_state_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationStateInput"></a>

```python
activation_state_input: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `compute_quota_config_input`<sup>Optional</sup> <a name="compute_quota_config_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaConfigInput"></a>

```python
compute_quota_config_input: IResolvable | SagemakerComputeQuotaComputeQuotaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

---

##### `compute_quota_target_input`<sup>Optional</sup> <a name="compute_quota_target_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.computeQuotaTargetInput"></a>

```python
compute_quota_target_input: IResolvable | SagemakerComputeQuotaComputeQuotaTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerComputeQuotaTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]

---

##### `activation_state`<sup>Required</sup> <a name="activation_state" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuota.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerComputeQuotaComputeQuotaConfig <a name="SagemakerComputeQuotaComputeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig(
  compute_quota_resources: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources] = None,
  preempt_team_tasks: str = None,
  resource_sharing_config: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.computeQuotaResources">compute_quota_resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]</code> | Per-instance-type compute quotas for the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.preemptTeamTasks">preempt_team_tasks</a></code> | <code>str</code> | Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.resourceSharingConfig">resource_sharing_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50). |

---

##### `compute_quota_resources`<sup>Optional</sup> <a name="compute_quota_resources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.computeQuotaResources"></a>

```python
compute_quota_resources: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]

Per-instance-type compute quotas for the team.

When VCpu / MemoryInGiB / Accelerators are partially specified, SageMaker auto-fills the remaining fields ratio-proportionally to the underlying instance ? Read may return values the customer did not supply (drift may flag this).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_resources SagemakerComputeQuota#compute_quota_resources}

---

##### `preempt_team_tasks`<sup>Optional</sup> <a name="preempt_team_tasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.preemptTeamTasks"></a>

```python
preempt_team_tasks: str
```

- *Type:* str

Team-task preemption policy. Defaults service-side to 'LowerPriority' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#preempt_team_tasks SagemakerComputeQuota#preempt_team_tasks}

---

##### `resource_sharing_config`<sup>Optional</sup> <a name="resource_sharing_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig.property.resourceSharingConfig"></a>

```python
resource_sharing_config: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

Idle-resource-sharing strategy for this team's quota. When omitted, the service applies defaults (Strategy=LendAndBorrow, BorrowLimit=50).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#resource_sharing_config SagemakerComputeQuota#resource_sharing_config}

---

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources(
  accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition = None,
  accelerators: typing.Union[int, float] = None,
  count: typing.Union[int, float] = None,
  instance_type: str = None,
  memory_in_gi_b: typing.Union[int, float] = None,
  v_cpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.acceleratorPartition">accelerator_partition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.accelerators">accelerators</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of instances of this type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.instanceType">instance_type</a></code> | <code>str</code> | The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.memoryInGiB">memory_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | The memory in GiB allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.vCpu">v_cpu</a></code> | <code>typing.Union[int, float]</code> | The number of vCPUs allocated to the team. |

---

##### `accelerator_partition`<sup>Optional</sup> <a name="accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.acceleratorPartition"></a>

```python
accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation.

Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition SagemakerComputeQuota#accelerator_partition}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.accelerators"></a>

```python
accelerators: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators SagemakerComputeQuota#accelerators}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances of this type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type SagemakerComputeQuota#instance_type}

---

##### `memory_in_gi_b`<sup>Optional</sup> <a name="memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.memoryInGiB"></a>

```python
memory_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The memory in GiB allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b SagemakerComputeQuota#memory_in_gi_b}

---

##### `v_cpu`<sup>Optional</sup> <a name="v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources.property.vCpu"></a>

```python
v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of vCPUs allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu SagemakerComputeQuota#v_cpu}

---

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition(
  count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of MIG partitions of the specified Type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.type">type</a></code> | <code>str</code> | MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition.property.type"></a>

```python
type: str
```

- *Type:* str

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig(
  absolute_borrow_limits: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits] = None,
  borrow_limit: typing.Union[int, float] = None,
  strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.absoluteBorrowLimits">absolute_borrow_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]</code> | Per-instance-type absolute caps on resources this team can borrow. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.borrowLimit">borrow_limit</a></code> | <code>typing.Union[int, float]</code> | Maximum percentage of the team's idle quota that can be borrowed by other teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.strategy">strategy</a></code> | <code>str</code> | How this team participates in idle-resource sharing. |

---

##### `absolute_borrow_limits`<sup>Optional</sup> <a name="absolute_borrow_limits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.absoluteBorrowLimits"></a>

```python
absolute_borrow_limits: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]

Per-instance-type absolute caps on resources this team can borrow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#absolute_borrow_limits SagemakerComputeQuota#absolute_borrow_limits}

---

##### `borrow_limit`<sup>Optional</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.borrowLimit"></a>

```python
borrow_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum percentage of the team's idle quota that can be borrowed by other teams.

Smithy admits 0..10000; in practice the service-documented operational range is 1..500. Defaults service-side to 50 when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#borrow_limit SagemakerComputeQuota#borrow_limit}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

How this team participates in idle-resource sharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#strategy SagemakerComputeQuota#strategy}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits(
  accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition = None,
  accelerators: typing.Union[int, float] = None,
  count: typing.Union[int, float] = None,
  instance_type: str = None,
  memory_in_gi_b: typing.Union[int, float] = None,
  v_cpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.acceleratorPartition">accelerator_partition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.accelerators">accelerators</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of instances of this type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.instanceType">instance_type</a></code> | <code>str</code> | The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.memoryInGiB">memory_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | The memory in GiB allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.vCpu">v_cpu</a></code> | <code>typing.Union[int, float]</code> | The number of vCPUs allocated to the team. |

---

##### `accelerator_partition`<sup>Optional</sup> <a name="accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.acceleratorPartition"></a>

```python
accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

Multi-instance GPU (MIG) partition profile and count, for fractional accelerator allocation.

Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerator_partition SagemakerComputeQuota#accelerator_partition}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.accelerators"></a>

```python
accelerators: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators (e.g., GPUs) of this type allocated to the team. SageMaker auto-fills VCpu / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#accelerators SagemakerComputeQuota#accelerators}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of instances of this type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The cluster instance type the quota applies to (e.g., 'ml.m5.xlarge', 'ml.p5.48xlarge'). Validated by the service against the supported HyperPod instance types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#instance_type SagemakerComputeQuota#instance_type}

---

##### `memory_in_gi_b`<sup>Optional</sup> <a name="memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.memoryInGiB"></a>

```python
memory_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The memory in GiB allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / VCpu ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#memory_in_gi_b SagemakerComputeQuota#memory_in_gi_b}

---

##### `v_cpu`<sup>Optional</sup> <a name="v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits.property.vCpu"></a>

```python
v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of vCPUs allocated to the team.

Floating-point. SageMaker auto-fills Accelerators / MemoryInGiB ratio-proportionally if only this is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#v_cpu SagemakerComputeQuota#v_cpu}

---

### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition(
  count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of MIG partitions of the specified Type allocated to the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.type">type</a></code> | <code>str</code> | MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition.property.type"></a>

```python
type: str
```

- *Type:* str

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

### SagemakerComputeQuotaComputeQuotaTarget <a name="SagemakerComputeQuotaComputeQuotaTarget" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget(
  team_name: str,
  fair_share_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.teamName">team_name</a></code> | <code>str</code> | The name of the team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.fairShareWeight">fair_share_weight</a></code> | <code>typing.Union[int, float]</code> | Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted. |

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

The name of the team.

Materialized as Kubernetes namespace 'hyperpod-ns-<TeamName>' on the EKS cluster, so the value must satisfy RFC 1123 namespace constraints. Reassignment is not supported (createOnly).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#team_name SagemakerComputeQuota#team_name}

---

##### `fair_share_weight`<sup>Optional</sup> <a name="fair_share_weight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget.property.fairShareWeight"></a>

```python
fair_share_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Relative fair-share weight when fair-share scheduling is enabled on the parent ClusterSchedulerConfig. Defaults service-side to 0 when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#fair_share_weight SagemakerComputeQuota#fair_share_weight}

---

### SagemakerComputeQuotaConfig <a name="SagemakerComputeQuotaConfig" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_arn: str,
  compute_quota_config: SagemakerComputeQuotaComputeQuotaConfig,
  compute_quota_target: SagemakerComputeQuotaComputeQuotaTarget,
  name: str,
  activation_state: str = None,
  description: str = None,
  tags: IResolvable | typing.List[SagemakerComputeQuotaTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaConfig">compute_quota_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaTarget">compute_quota_target</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | The team this compute allocation rule applies to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.name">name</a></code> | <code>str</code> | The name of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.activationState">activation_state</a></code> | <code>str</code> | Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.description">description</a></code> | <code>str</code> | A free-form description of the compute allocation definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]</code> | Tags to associate with the compute allocation definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

The ARN of the EKS-orchestrated SageMaker HyperPod cluster the compute allocation definition is bound to.

Slurm-orchestrated clusters are rejected by the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#cluster_arn SagemakerComputeQuota#cluster_arn}

---

##### `compute_quota_config`<sup>Required</sup> <a name="compute_quota_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaConfig"></a>

```python
compute_quota_config: SagemakerComputeQuotaComputeQuotaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

Compute allocation rules: per-resource quotas, idle-borrowing strategy, and team-task preemption policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_config SagemakerComputeQuota#compute_quota_config}

---

##### `compute_quota_target`<sup>Required</sup> <a name="compute_quota_target" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.computeQuotaTarget"></a>

```python
compute_quota_target: SagemakerComputeQuotaComputeQuotaTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

The team this compute allocation rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#compute_quota_target SagemakerComputeQuota#compute_quota_target}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#name SagemakerComputeQuota#name}

---

##### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

Whether the compute allocation rule is active. Defaults service-side to 'Enabled' when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#activation_state SagemakerComputeQuota#activation_state}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-form description of the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#description SagemakerComputeQuota#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerComputeQuotaTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]

Tags to associate with the compute allocation definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#tags SagemakerComputeQuota#tags}

---

### SagemakerComputeQuotaTags <a name="SagemakerComputeQuotaTags" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#key SagemakerComputeQuota#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#value SagemakerComputeQuota#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#key SagemakerComputeQuota#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#value SagemakerComputeQuota#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---


### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]

---


### SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition">put_accelerator_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAcceleratorPartition">reset_accelerator_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetMemoryInGiB">reset_memory_in_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetVCpu">reset_v_cpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_partition` <a name="put_accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition"></a>

```python
def put_accelerator_partition(
  count: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.putAcceleratorPartition.parameter.type"></a>

- *Type:* str

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

##### `reset_accelerator_partition` <a name="reset_accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAcceleratorPartition"></a>

```python
def reset_accelerator_partition() -> None
```

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_memory_in_gi_b` <a name="reset_memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetMemoryInGiB"></a>

```python
def reset_memory_in_gi_b() -> None
```

##### `reset_v_cpu` <a name="reset_v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.resetVCpu"></a>

```python
def reset_v_cpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition">accelerator_partition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartitionInput">accelerator_partition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorsInput">accelerators_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiBInput">memory_in_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpuInput">v_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators">accelerators</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB">memory_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu">v_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_partition`<sup>Required</sup> <a name="accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartition"></a>

```python
accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartitionOutputReference</a>

---

##### `accelerator_partition_input`<sup>Optional</sup> <a name="accelerator_partition_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorPartitionInput"></a>

```python
accelerator_partition_input: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesAcceleratorPartition</a>

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.acceleratorsInput"></a>

```python
accelerators_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `memory_in_gi_b_input`<sup>Optional</sup> <a name="memory_in_gi_b_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiBInput"></a>

```python
memory_in_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `v_cpu_input`<sup>Optional</sup> <a name="v_cpu_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpuInput"></a>

```python
v_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.accelerators"></a>

```python
accelerators: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `memory_in_gi_b`<sup>Required</sup> <a name="memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.memoryInGiB"></a>

```python
memory_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `v_cpu`<sup>Required</sup> <a name="v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.vCpu"></a>

```python
v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>

---


### SagemakerComputeQuotaComputeQuotaConfigOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources">put_compute_quota_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig">put_resource_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetComputeQuotaResources">reset_compute_quota_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetPreemptTeamTasks">reset_preempt_team_tasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetResourceSharingConfig">reset_resource_sharing_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compute_quota_resources` <a name="put_compute_quota_resources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources"></a>

```python
def put_compute_quota_resources(
  value: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putComputeQuotaResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]

---

##### `put_resource_sharing_config` <a name="put_resource_sharing_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig"></a>

```python
def put_resource_sharing_config(
  absolute_borrow_limits: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits] = None,
  borrow_limit: typing.Union[int, float] = None,
  strategy: str = None
) -> None
```

###### `absolute_borrow_limits`<sup>Optional</sup> <a name="absolute_borrow_limits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig.parameter.absoluteBorrowLimits"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]

Per-instance-type absolute caps on resources this team can borrow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#absolute_borrow_limits SagemakerComputeQuota#absolute_borrow_limits}

---

###### `borrow_limit`<sup>Optional</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig.parameter.borrowLimit"></a>

- *Type:* typing.Union[int, float]

Maximum percentage of the team's idle quota that can be borrowed by other teams.

Smithy admits 0..10000; in practice the service-documented operational range is 1..500. Defaults service-side to 50 when omitted on Create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#borrow_limit SagemakerComputeQuota#borrow_limit}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.putResourceSharingConfig.parameter.strategy"></a>

- *Type:* str

How this team participates in idle-resource sharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#strategy SagemakerComputeQuota#strategy}

---

##### `reset_compute_quota_resources` <a name="reset_compute_quota_resources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetComputeQuotaResources"></a>

```python
def reset_compute_quota_resources() -> None
```

##### `reset_preempt_team_tasks` <a name="reset_preempt_team_tasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetPreemptTeamTasks"></a>

```python
def reset_preempt_team_tasks() -> None
```

##### `reset_resource_sharing_config` <a name="reset_resource_sharing_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.resetResourceSharingConfig"></a>

```python
def reset_resource_sharing_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources">compute_quota_resources</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig">resource_sharing_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResourcesInput">compute_quota_resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasksInput">preempt_team_tasks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfigInput">resource_sharing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks">preempt_team_tasks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_quota_resources`<sup>Required</sup> <a name="compute_quota_resources" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResources"></a>

```python
compute_quota_resources: SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResourcesList</a>

---

##### `resource_sharing_config`<sup>Required</sup> <a name="resource_sharing_config" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfig"></a>

```python
resource_sharing_config: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference</a>

---

##### `compute_quota_resources_input`<sup>Optional</sup> <a name="compute_quota_resources_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.computeQuotaResourcesInput"></a>

```python
compute_quota_resources_input: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources">SagemakerComputeQuotaComputeQuotaConfigComputeQuotaResources</a>]

---

##### `preempt_team_tasks_input`<sup>Optional</sup> <a name="preempt_team_tasks_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasksInput"></a>

```python
preempt_team_tasks_input: str
```

- *Type:* str

---

##### `resource_sharing_config_input`<sup>Optional</sup> <a name="resource_sharing_config_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.resourceSharingConfigInput"></a>

```python
resource_sharing_config_input: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---

##### `preempt_team_tasks`<sup>Required</sup> <a name="preempt_team_tasks" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.preemptTeamTasks"></a>

```python
preempt_team_tasks: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfig">SagemakerComputeQuotaComputeQuotaConfig</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition">put_accelerator_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAcceleratorPartition">reset_accelerator_partition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetMemoryInGiB">reset_memory_in_gi_b</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetVCpu">reset_v_cpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_partition` <a name="put_accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition"></a>

```python
def put_accelerator_partition(
  count: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of MIG partitions of the specified Type allocated to the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#count SagemakerComputeQuota#count}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.putAcceleratorPartition.parameter.type"></a>

- *Type:* str

MIG profile type. Service rejects MIG profiles that the chosen InstanceType does not support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/sagemaker_compute_quota#type SagemakerComputeQuota#type}

---

##### `reset_accelerator_partition` <a name="reset_accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAcceleratorPartition"></a>

```python
def reset_accelerator_partition() -> None
```

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_memory_in_gi_b` <a name="reset_memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetMemoryInGiB"></a>

```python
def reset_memory_in_gi_b() -> None
```

##### `reset_v_cpu` <a name="reset_v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.resetVCpu"></a>

```python
def reset_v_cpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition">accelerator_partition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartitionInput">accelerator_partition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorsInput">accelerators_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiBInput">memory_in_gi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpuInput">v_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators">accelerators</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB">memory_in_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu">v_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_partition`<sup>Required</sup> <a name="accelerator_partition" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartition"></a>

```python
accelerator_partition: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartitionOutputReference</a>

---

##### `accelerator_partition_input`<sup>Optional</sup> <a name="accelerator_partition_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorPartitionInput"></a>

```python
accelerator_partition_input: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsAcceleratorPartition</a>

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.acceleratorsInput"></a>

```python
accelerators_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `memory_in_gi_b_input`<sup>Optional</sup> <a name="memory_in_gi_b_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiBInput"></a>

```python
memory_in_gi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `v_cpu_input`<sup>Optional</sup> <a name="v_cpu_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpuInput"></a>

```python
v_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.accelerators"></a>

```python
accelerators: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `memory_in_gi_b`<sup>Required</sup> <a name="memory_in_gi_b" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.memoryInGiB"></a>

```python
memory_in_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `v_cpu`<sup>Required</sup> <a name="v_cpu" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.vCpu"></a>

```python
v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>

---


### SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference <a name="SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits">put_absolute_borrow_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetAbsoluteBorrowLimits">reset_absolute_borrow_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetBorrowLimit">reset_borrow_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_absolute_borrow_limits` <a name="put_absolute_borrow_limits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits"></a>

```python
def put_absolute_borrow_limits(
  value: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.putAbsoluteBorrowLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]

---

##### `reset_absolute_borrow_limits` <a name="reset_absolute_borrow_limits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetAbsoluteBorrowLimits"></a>

```python
def reset_absolute_borrow_limits() -> None
```

##### `reset_borrow_limit` <a name="reset_borrow_limit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetBorrowLimit"></a>

```python
def reset_borrow_limit() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits">absolute_borrow_limits</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimitsInput">absolute_borrow_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimitInput">borrow_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit">borrow_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_borrow_limits`<sup>Required</sup> <a name="absolute_borrow_limits" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimits"></a>

```python
absolute_borrow_limits: SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimitsList</a>

---

##### `absolute_borrow_limits_input`<sup>Optional</sup> <a name="absolute_borrow_limits_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.absoluteBorrowLimitsInput"></a>

```python
absolute_borrow_limits_input: IResolvable | typing.List[SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigAbsoluteBorrowLimits</a>]

---

##### `borrow_limit_input`<sup>Optional</sup> <a name="borrow_limit_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimitInput"></a>

```python
borrow_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `borrow_limit`<sup>Required</sup> <a name="borrow_limit" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.borrowLimit"></a>

```python
borrow_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig">SagemakerComputeQuotaComputeQuotaConfigResourceSharingConfig</a>

---


### SagemakerComputeQuotaComputeQuotaTargetOutputReference <a name="SagemakerComputeQuotaComputeQuotaTargetOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resetFairShareWeight">reset_fair_share_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fair_share_weight` <a name="reset_fair_share_weight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.resetFairShareWeight"></a>

```python
def reset_fair_share_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeightInput">fair_share_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamNameInput">team_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight">fair_share_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fair_share_weight_input`<sup>Optional</sup> <a name="fair_share_weight_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeightInput"></a>

```python
fair_share_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_name_input`<sup>Optional</sup> <a name="team_name_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamNameInput"></a>

```python
team_name_input: str
```

- *Type:* str

---

##### `fair_share_weight`<sup>Required</sup> <a name="fair_share_weight" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.fairShareWeight"></a>

```python
fair_share_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaComputeQuotaTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaComputeQuotaTarget">SagemakerComputeQuotaComputeQuotaTarget</a>

---


### SagemakerComputeQuotaTagsList <a name="SagemakerComputeQuotaTagsList" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerComputeQuotaTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerComputeQuotaTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>]

---


### SagemakerComputeQuotaTagsOutputReference <a name="SagemakerComputeQuotaTagsOutputReference" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_compute_quota

sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerComputeQuotaTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerComputeQuota.SagemakerComputeQuotaTags">SagemakerComputeQuotaTags</a>

---



