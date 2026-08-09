# `batchComputeEnvironment` Submodule <a name="`batchComputeEnvironment` Submodule" id="@cdktn/provider-awscc.batchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchComputeEnvironment <a name="BatchComputeEnvironment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment awscc_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  compute_environment_name: str = None,
  compute_resources: BatchComputeEnvironmentComputeResources = None,
  context: str = None,
  eks_configuration: BatchComputeEnvironmentEksConfiguration = None,
  replace_compute_environment: bool | IResolvable = None,
  service_role: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  unmanagedv_cpus: typing.Union[int, float] = None,
  update_policy: BatchComputeEnvironmentUpdatePolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeEnvironmentName">compute_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeResources">compute_resources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.eksConfiguration">eks_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.replaceComputeEnvironment">replace_compute_environment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.unmanagedvCpus">unmanagedv_cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `compute_environment_name`<sup>Optional</sup> <a name="compute_environment_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeEnvironmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}.

---

##### `compute_resources`<sup>Optional</sup> <a name="compute_resources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.computeResources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.context"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}.

---

##### `eks_configuration`<sup>Optional</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.eksConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}.

---

##### `replace_compute_environment`<sup>Optional</sup> <a name="replace_compute_environment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.replaceComputeEnvironment"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}.

---

##### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `unmanagedv_cpus`<sup>Optional</sup> <a name="unmanagedv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.unmanagedvCpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}.

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources">put_compute_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration">put_eks_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName">reset_compute_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources">reset_compute_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration">reset_eks_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment">reset_replace_compute_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole">reset_service_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus">reset_unmanagedv_cpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_resources` <a name="put_compute_resources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources"></a>

```python
def put_compute_resources(
  allocation_strategy: str = None,
  bid_percentage: typing.Union[int, float] = None,
  desiredv_cpus: typing.Union[int, float] = None,
  ec2_configuration: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration] = None,
  ec2_key_pair: str = None,
  image_id: str = None,
  instance_role: str = None,
  instance_types: typing.List[str] = None,
  launch_template: BatchComputeEnvironmentComputeResourcesLaunchTemplate = None,
  maxv_cpus: typing.Union[int, float] = None,
  minv_cpus: typing.Union[int, float] = None,
  placement_group: str = None,
  scaling_policy: BatchComputeEnvironmentComputeResourcesScalingPolicy = None,
  security_group_ids: typing.List[str] = None,
  spot_iam_fleet_role: str = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  update_to_latest_image_version: bool | IResolvable = None
) -> None
```

###### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.allocationStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

###### `bid_percentage`<sup>Optional</sup> <a name="bid_percentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.bidPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

###### `desiredv_cpus`<sup>Optional</sup> <a name="desiredv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.desiredvCpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}.

---

###### `ec2_configuration`<sup>Optional</sup> <a name="ec2_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.ec2Configuration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}.

---

###### `ec2_key_pair`<sup>Optional</sup> <a name="ec2_key_pair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.ec2KeyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}.

---

###### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

###### `instance_role`<sup>Optional</sup> <a name="instance_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.instanceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

###### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.instanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}.

---

###### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.launchTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}.

---

###### `maxv_cpus`<sup>Optional</sup> <a name="maxv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.maxvCpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}.

---

###### `minv_cpus`<sup>Optional</sup> <a name="minv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.minvCpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}.

---

###### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.placementGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

###### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.scalingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}.

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

###### `spot_iam_fleet_role`<sup>Optional</sup> <a name="spot_iam_fleet_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.spotIamFleetRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

###### `update_to_latest_image_version`<sup>Optional</sup> <a name="update_to_latest_image_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.updateToLatestImageVersion"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}.

---

##### `put_eks_configuration` <a name="put_eks_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration"></a>

```python
def put_eks_configuration(
  eks_cluster_arn: str = None,
  kubernetes_namespace: str = None
) -> None
```

###### `eks_cluster_arn`<sup>Optional</sup> <a name="eks_cluster_arn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.eksClusterArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

###### `kubernetes_namespace`<sup>Optional</sup> <a name="kubernetes_namespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.kubernetesNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy"></a>

```python
def put_update_policy(
  job_execution_timeout_minutes: typing.Union[int, float] = None,
  terminate_jobs_on_update: bool | IResolvable = None
) -> None
```

###### `job_execution_timeout_minutes`<sup>Optional</sup> <a name="job_execution_timeout_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.jobExecutionTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

###### `terminate_jobs_on_update`<sup>Optional</sup> <a name="terminate_jobs_on_update" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.terminateJobsOnUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

##### `reset_compute_environment_name` <a name="reset_compute_environment_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeEnvironmentName"></a>

```python
def reset_compute_environment_name() -> None
```

##### `reset_compute_resources` <a name="reset_compute_resources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources"></a>

```python
def reset_compute_resources() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_eks_configuration` <a name="reset_eks_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration"></a>

```python
def reset_eks_configuration() -> None
```

##### `reset_replace_compute_environment` <a name="reset_replace_compute_environment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetReplaceComputeEnvironment"></a>

```python
def reset_replace_compute_environment() -> None
```

##### `reset_service_role` <a name="reset_service_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole"></a>

```python
def reset_service_role() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unmanagedv_cpus` <a name="reset_unmanagedv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUnmanagedvCpus"></a>

```python
def reset_unmanagedv_cpus() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BatchComputeEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchComputeEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn">compute_environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources">compute_resources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration">eks_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput">compute_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput">compute_resources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput">eks_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput">replace_compute_environment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput">unmanagedv_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput">update_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName">compute_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment">replace_compute_environment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus">unmanagedv_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_environment_arn`<sup>Required</sup> <a name="compute_environment_arn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentArn"></a>

```python
compute_environment_arn: str
```

- *Type:* str

---

##### `compute_resources`<sup>Required</sup> <a name="compute_resources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources"></a>

```python
compute_resources: BatchComputeEnvironmentComputeResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `eks_configuration`<sup>Required</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration"></a>

```python
eks_configuration: BatchComputeEnvironmentEksConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy"></a>

```python
update_policy: BatchComputeEnvironmentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `compute_environment_name_input`<sup>Optional</sup> <a name="compute_environment_name_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentNameInput"></a>

```python
compute_environment_name_input: str
```

- *Type:* str

---

##### `compute_resources_input`<sup>Optional</sup> <a name="compute_resources_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput"></a>

```python
compute_resources_input: IResolvable | BatchComputeEnvironmentComputeResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `eks_configuration_input`<sup>Optional</sup> <a name="eks_configuration_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput"></a>

```python
eks_configuration_input: IResolvable | BatchComputeEnvironmentEksConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `replace_compute_environment_input`<sup>Optional</sup> <a name="replace_compute_environment_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironmentInput"></a>

```python
replace_compute_environment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unmanagedv_cpus_input`<sup>Optional</sup> <a name="unmanagedv_cpus_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpusInput"></a>

```python
unmanagedv_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput"></a>

```python
update_policy_input: IResolvable | BatchComputeEnvironmentUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `compute_environment_name`<sup>Required</sup> <a name="compute_environment_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.computeEnvironmentName"></a>

```python
compute_environment_name: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `replace_compute_environment`<sup>Required</sup> <a name="replace_compute_environment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.replaceComputeEnvironment"></a>

```python
replace_compute_environment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unmanagedv_cpus`<sup>Required</sup> <a name="unmanagedv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.unmanagedvCpus"></a>

```python
unmanagedv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentComputeResources <a name="BatchComputeEnvironmentComputeResources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResources(
  allocation_strategy: str = None,
  bid_percentage: typing.Union[int, float] = None,
  desiredv_cpus: typing.Union[int, float] = None,
  ec2_configuration: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration] = None,
  ec2_key_pair: str = None,
  image_id: str = None,
  instance_role: str = None,
  instance_types: typing.List[str] = None,
  launch_template: BatchComputeEnvironmentComputeResourcesLaunchTemplate = None,
  maxv_cpus: typing.Union[int, float] = None,
  minv_cpus: typing.Union[int, float] = None,
  placement_group: str = None,
  scaling_policy: BatchComputeEnvironmentComputeResourcesScalingPolicy = None,
  security_group_ids: typing.List[str] = None,
  spot_iam_fleet_role: str = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  update_to_latest_image_version: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage">bid_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus">desiredv_cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration">ec2_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole">instance_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus">maxv_cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus">minv_cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup">placement_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole">spot_iam_fleet_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion">update_to_latest_image_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}. |

---

##### `allocation_strategy`<sup>Optional</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

##### `bid_percentage`<sup>Optional</sup> <a name="bid_percentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage"></a>

```python
bid_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

##### `desiredv_cpus`<sup>Optional</sup> <a name="desiredv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredvCpus"></a>

```python
desiredv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#desiredv_cpus BatchComputeEnvironment#desiredv_cpus}.

---

##### `ec2_configuration`<sup>Optional</sup> <a name="ec2_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration"></a>

```python
ec2_configuration: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_configuration BatchComputeEnvironment#ec_2_configuration}.

---

##### `ec2_key_pair`<sup>Optional</sup> <a name="ec2_key_pair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#ec_2_key_pair BatchComputeEnvironment#ec_2_key_pair}.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

##### `instance_role`<sup>Optional</sup> <a name="instance_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole"></a>

```python
instance_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#instance_types BatchComputeEnvironment#instance_types}.

---

##### `launch_template`<sup>Optional</sup> <a name="launch_template" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate"></a>

```python
launch_template: BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}.

---

##### `maxv_cpus`<sup>Optional</sup> <a name="maxv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxvCpus"></a>

```python
maxv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#maxv_cpus BatchComputeEnvironment#maxv_cpus}.

---

##### `minv_cpus`<sup>Optional</sup> <a name="minv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minvCpus"></a>

```python
minv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#minv_cpus BatchComputeEnvironment#minv_cpus}.

---

##### `placement_group`<sup>Optional</sup> <a name="placement_group" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

##### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.scalingPolicy"></a>

```python
scaling_policy: BatchComputeEnvironmentComputeResourcesScalingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#scaling_policy BatchComputeEnvironment#scaling_policy}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

##### `spot_iam_fleet_role`<sup>Optional</sup> <a name="spot_iam_fleet_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole"></a>

```python
spot_iam_fleet_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `update_to_latest_image_version`<sup>Optional</sup> <a name="update_to_latest_image_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.updateToLatestImageVersion"></a>

```python
update_to_latest_image_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_to_latest_image_version BatchComputeEnvironment#update_to_latest_image_version}.

---

### BatchComputeEnvironmentComputeResourcesEc2Configuration <a name="BatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration(
  batch_image_status: str = None,
  image_id_override: str = None,
  image_kubernetes_version: str = None,
  image_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus">batch_image_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride">image_id_override</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion">image_kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType">image_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}. |

---

##### `batch_image_status`<sup>Optional</sup> <a name="batch_image_status" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.batchImageStatus"></a>

```python
batch_image_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#batch_image_status BatchComputeEnvironment#batch_image_status}.

---

##### `image_id_override`<sup>Optional</sup> <a name="image_id_override" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride"></a>

```python
image_id_override: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}.

---

##### `image_kubernetes_version`<sup>Optional</sup> <a name="image_kubernetes_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageKubernetesVersion"></a>

```python
image_kubernetes_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_kubernetes_version BatchComputeEnvironment#image_kubernetes_version}.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate(
  launch_template_id: str = None,
  launch_template_name: str = None,
  overrides: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides] = None,
  userdata_type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides">overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType">userdata_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.overrides"></a>

```python
overrides: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}.

---

##### `userdata_type`<sup>Optional</sup> <a name="userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.userdataType"></a>

```python
userdata_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides(
  launch_template_id: str = None,
  launch_template_name: str = None,
  target_instance_types: typing.List[str] = None,
  userdata_type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes">target_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType">userdata_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `target_instance_types`<sup>Optional</sup> <a name="target_instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.targetInstanceTypes"></a>

```python
target_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#target_instance_types BatchComputeEnvironment#target_instance_types}.

---

##### `userdata_type`<sup>Optional</sup> <a name="userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.userdataType"></a>

```python
userdata_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentComputeResourcesScalingPolicy <a name="BatchComputeEnvironmentComputeResourcesScalingPolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy(
  min_scale_down_delay_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes">min_scale_down_delay_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}. |

---

##### `min_scale_down_delay_minutes`<sup>Optional</sup> <a name="min_scale_down_delay_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy.property.minScaleDownDelayMinutes"></a>

```python
min_scale_down_delay_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}.

---

### BatchComputeEnvironmentConfig <a name="BatchComputeEnvironmentConfig" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  type: str,
  compute_environment_name: str = None,
  compute_resources: BatchComputeEnvironmentComputeResources = None,
  context: str = None,
  eks_configuration: BatchComputeEnvironmentEksConfiguration = None,
  replace_compute_environment: bool | IResolvable = None,
  service_role: str = None,
  state: str = None,
  tags: typing.Mapping[str] = None,
  unmanagedv_cpus: typing.Union[int, float] = None,
  update_policy: BatchComputeEnvironmentUpdatePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName">compute_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources">compute_resources</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context">context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration">eks_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment">replace_compute_environment</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus">unmanagedv_cpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `compute_environment_name`<sup>Optional</sup> <a name="compute_environment_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeEnvironmentName"></a>

```python
compute_environment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_environment_name BatchComputeEnvironment#compute_environment_name}.

---

##### `compute_resources`<sup>Optional</sup> <a name="compute_resources" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources"></a>

```python
compute_resources: BatchComputeEnvironmentComputeResources
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#context BatchComputeEnvironment#context}.

---

##### `eks_configuration`<sup>Optional</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration"></a>

```python
eks_configuration: BatchComputeEnvironmentEksConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}.

---

##### `replace_compute_environment`<sup>Optional</sup> <a name="replace_compute_environment" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.replaceComputeEnvironment"></a>

```python
replace_compute_environment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#replace_compute_environment BatchComputeEnvironment#replace_compute_environment}.

---

##### `service_role`<sup>Optional</sup> <a name="service_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}

---

##### `unmanagedv_cpus`<sup>Optional</sup> <a name="unmanagedv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.unmanagedvCpus"></a>

```python
unmanagedv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#unmanagedv_cpus BatchComputeEnvironment#unmanagedv_cpus}.

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy"></a>

```python
update_policy: BatchComputeEnvironmentUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}.

---

### BatchComputeEnvironmentEksConfiguration <a name="BatchComputeEnvironmentEksConfiguration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration(
  eks_cluster_arn: str = None,
  kubernetes_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn">eks_cluster_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}. |

---

##### `eks_cluster_arn`<sup>Optional</sup> <a name="eks_cluster_arn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn"></a>

```python
eks_cluster_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

##### `kubernetes_namespace`<sup>Optional</sup> <a name="kubernetes_namespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

### BatchComputeEnvironmentUpdatePolicy <a name="BatchComputeEnvironmentUpdatePolicy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy(
  job_execution_timeout_minutes: typing.Union[int, float] = None,
  terminate_jobs_on_update: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes">job_execution_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate">terminate_jobs_on_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}. |

---

##### `job_execution_timeout_minutes`<sup>Optional</sup> <a name="job_execution_timeout_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes"></a>

```python
job_execution_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

##### `terminate_jobs_on_update`<sup>Optional</sup> <a name="terminate_jobs_on_update" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate"></a>

```python
terminate_jobs_on_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]

---


### BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus">reset_batch_image_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride">reset_image_id_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion">reset_image_kubernetes_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType">reset_image_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_image_status` <a name="reset_batch_image_status" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetBatchImageStatus"></a>

```python
def reset_batch_image_status() -> None
```

##### `reset_image_id_override` <a name="reset_image_id_override" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride"></a>

```python
def reset_image_id_override() -> None
```

##### `reset_image_kubernetes_version` <a name="reset_image_kubernetes_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageKubernetesVersion"></a>

```python
def reset_image_kubernetes_version() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType"></a>

```python
def reset_image_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput">batch_image_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput">image_id_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput">image_kubernetes_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus">batch_image_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">image_id_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion">image_kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_image_status_input`<sup>Optional</sup> <a name="batch_image_status_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatusInput"></a>

```python
batch_image_status_input: str
```

- *Type:* str

---

##### `image_id_override_input`<sup>Optional</sup> <a name="image_id_override_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput"></a>

```python
image_id_override_input: str
```

- *Type:* str

---

##### `image_kubernetes_version_input`<sup>Optional</sup> <a name="image_kubernetes_version_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersionInput"></a>

```python
image_kubernetes_version_input: str
```

- *Type:* str

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `batch_image_status`<sup>Required</sup> <a name="batch_image_status" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.batchImageStatus"></a>

```python
batch_image_status: str
```

- *Type:* str

---

##### `image_id_override`<sup>Required</sup> <a name="image_id_override" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```python
image_id_override: str
```

- *Type:* str

---

##### `image_kubernetes_version`<sup>Required</sup> <a name="image_kubernetes_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageKubernetesVersion"></a>

```python
image_kubernetes_version: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentComputeResourcesEc2Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName">reset_launch_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType">reset_userdata_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_overrides` <a name="put_overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides"></a>

```python
def put_overrides(
  value: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]

---

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_launch_template_name` <a name="reset_launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```python
def reset_launch_template_name() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_userdata_type` <a name="reset_userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetUserdataType"></a>

```python
def reset_userdata_type() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput">launch_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput">userdata_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType">userdata_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overrides"></a>

```python
overrides: BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList</a>

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `launch_template_name_input`<sup>Optional</sup> <a name="launch_template_name_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```python
launch_template_name_input: str
```

- *Type:* str

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]

---

##### `userdata_type_input`<sup>Optional</sup> <a name="userdata_type_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataTypeInput"></a>

```python
userdata_type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `userdata_type`<sup>Required</sup> <a name="userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.userdataType"></a>

```python
userdata_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId">reset_launch_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName">reset_launch_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes">reset_target_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType">reset_userdata_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_launch_template_id` <a name="reset_launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateId"></a>

```python
def reset_launch_template_id() -> None
```

##### `reset_launch_template_name` <a name="reset_launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetLaunchTemplateName"></a>

```python
def reset_launch_template_name() -> None
```

##### `reset_target_instance_types` <a name="reset_target_instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetTargetInstanceTypes"></a>

```python
def reset_target_instance_types() -> None
```

##### `reset_userdata_type` <a name="reset_userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetUserdataType"></a>

```python
def reset_userdata_type() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput">launch_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput">launch_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput">target_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput">userdata_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes">target_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType">userdata_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_id_input`<sup>Optional</sup> <a name="launch_template_id_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateIdInput"></a>

```python
launch_template_id_input: str
```

- *Type:* str

---

##### `launch_template_name_input`<sup>Optional</sup> <a name="launch_template_name_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateNameInput"></a>

```python
launch_template_name_input: str
```

- *Type:* str

---

##### `target_instance_types_input`<sup>Optional</sup> <a name="target_instance_types_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypesInput"></a>

```python
target_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `userdata_type_input`<sup>Optional</sup> <a name="userdata_type_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataTypeInput"></a>

```python
userdata_type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `target_instance_types`<sup>Required</sup> <a name="target_instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.targetInstanceTypes"></a>

```python
target_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `userdata_type`<sup>Required</sup> <a name="userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.userdataType"></a>

```python
userdata_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>

---


### BatchComputeEnvironmentComputeResourcesOutputReference <a name="BatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration">put_ec2_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate">put_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy">put_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy">reset_allocation_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage">reset_bid_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus">reset_desiredv_cpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration">reset_ec2_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair">reset_ec2_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole">reset_instance_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes">reset_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate">reset_launch_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus">reset_maxv_cpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus">reset_minv_cpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup">reset_placement_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy">reset_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole">reset_spot_iam_fleet_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion">reset_update_to_latest_image_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ec2_configuration` <a name="put_ec2_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration"></a>

```python
def put_ec2_configuration(
  value: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]

---

##### `put_launch_template` <a name="put_launch_template" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate"></a>

```python
def put_launch_template(
  launch_template_id: str = None,
  launch_template_name: str = None,
  overrides: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides] = None,
  userdata_type: str = None,
  version: str = None
) -> None
```

###### `launch_template_id`<sup>Optional</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.launchTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

###### `launch_template_name`<sup>Optional</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.launchTemplateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.overrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides">BatchComputeEnvironmentComputeResourcesLaunchTemplateOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#overrides BatchComputeEnvironment#overrides}.

---

###### `userdata_type`<sup>Optional</sup> <a name="userdata_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.userdataType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#userdata_type BatchComputeEnvironment#userdata_type}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

##### `put_scaling_policy` <a name="put_scaling_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy"></a>

```python
def put_scaling_policy(
  min_scale_down_delay_minutes: typing.Union[int, float] = None
) -> None
```

###### `min_scale_down_delay_minutes`<sup>Optional</sup> <a name="min_scale_down_delay_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putScalingPolicy.parameter.minScaleDownDelayMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_compute_environment#min_scale_down_delay_minutes BatchComputeEnvironment#min_scale_down_delay_minutes}.

---

##### `reset_allocation_strategy` <a name="reset_allocation_strategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy"></a>

```python
def reset_allocation_strategy() -> None
```

##### `reset_bid_percentage` <a name="reset_bid_percentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage"></a>

```python
def reset_bid_percentage() -> None
```

##### `reset_desiredv_cpus` <a name="reset_desiredv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredvCpus"></a>

```python
def reset_desiredv_cpus() -> None
```

##### `reset_ec2_configuration` <a name="reset_ec2_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration"></a>

```python
def reset_ec2_configuration() -> None
```

##### `reset_ec2_key_pair` <a name="reset_ec2_key_pair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair"></a>

```python
def reset_ec2_key_pair() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_role` <a name="reset_instance_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole"></a>

```python
def reset_instance_role() -> None
```

##### `reset_instance_types` <a name="reset_instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceTypes"></a>

```python
def reset_instance_types() -> None
```

##### `reset_launch_template` <a name="reset_launch_template" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate"></a>

```python
def reset_launch_template() -> None
```

##### `reset_maxv_cpus` <a name="reset_maxv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMaxvCpus"></a>

```python
def reset_maxv_cpus() -> None
```

##### `reset_minv_cpus` <a name="reset_minv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinvCpus"></a>

```python
def reset_minv_cpus() -> None
```

##### `reset_placement_group` <a name="reset_placement_group" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup"></a>

```python
def reset_placement_group() -> None
```

##### `reset_scaling_policy` <a name="reset_scaling_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetScalingPolicy"></a>

```python
def reset_scaling_policy() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_spot_iam_fleet_role` <a name="reset_spot_iam_fleet_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole"></a>

```python
def reset_spot_iam_fleet_role() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_update_to_latest_image_version` <a name="reset_update_to_latest_image_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetUpdateToLatestImageVersion"></a>

```python
def reset_update_to_latest_image_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">ec2_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput">allocation_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput">bid_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput">desiredv_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput">ec2_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput">ec2_key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput">instance_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput">instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput">launch_template_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput">maxv_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput">minv_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput">placement_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput">scaling_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput">spot_iam_fleet_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput">update_to_latest_image_version_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">allocation_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">bid_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus">desiredv_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">instance_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus">maxv_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus">minv_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">placement_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">spot_iam_fleet_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion">update_to_latest_image_version</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_configuration`<sup>Required</sup> <a name="ec2_configuration" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```python
ec2_configuration: BatchComputeEnvironmentComputeResourcesEc2ConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```python
launch_template: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `scaling_policy`<sup>Required</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicy"></a>

```python
scaling_policy: BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference">BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference</a>

---

##### `allocation_strategy_input`<sup>Optional</sup> <a name="allocation_strategy_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput"></a>

```python
allocation_strategy_input: str
```

- *Type:* str

---

##### `bid_percentage_input`<sup>Optional</sup> <a name="bid_percentage_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput"></a>

```python
bid_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desiredv_cpus_input`<sup>Optional</sup> <a name="desiredv_cpus_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpusInput"></a>

```python
desiredv_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_configuration_input`<sup>Optional</sup> <a name="ec2_configuration_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput"></a>

```python
ec2_configuration_input: IResolvable | typing.List[BatchComputeEnvironmentComputeResourcesEc2Configuration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration">BatchComputeEnvironmentComputeResourcesEc2Configuration</a>]

---

##### `ec2_key_pair_input`<sup>Optional</sup> <a name="ec2_key_pair_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput"></a>

```python
ec2_key_pair_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_role_input`<sup>Optional</sup> <a name="instance_role_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput"></a>

```python
instance_role_input: str
```

- *Type:* str

---

##### `instance_types_input`<sup>Optional</sup> <a name="instance_types_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypesInput"></a>

```python
instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_template_input`<sup>Optional</sup> <a name="launch_template_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput"></a>

```python
launch_template_input: IResolvable | BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `maxv_cpus_input`<sup>Optional</sup> <a name="maxv_cpus_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpusInput"></a>

```python
maxv_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minv_cpus_input`<sup>Optional</sup> <a name="minv_cpus_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpusInput"></a>

```python
minv_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `placement_group_input`<sup>Optional</sup> <a name="placement_group_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput"></a>

```python
placement_group_input: str
```

- *Type:* str

---

##### `scaling_policy_input`<sup>Optional</sup> <a name="scaling_policy_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.scalingPolicyInput"></a>

```python
scaling_policy_input: IResolvable | BatchComputeEnvironmentComputeResourcesScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_iam_fleet_role_input`<sup>Optional</sup> <a name="spot_iam_fleet_role_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput"></a>

```python
spot_iam_fleet_role_input: str
```

- *Type:* str

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_to_latest_image_version_input`<sup>Optional</sup> <a name="update_to_latest_image_version_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersionInput"></a>

```python
update_to_latest_image_version_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allocation_strategy`<sup>Required</sup> <a name="allocation_strategy" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```python
allocation_strategy: str
```

- *Type:* str

---

##### `bid_percentage`<sup>Required</sup> <a name="bid_percentage" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```python
bid_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desiredv_cpus`<sup>Required</sup> <a name="desiredv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredvCpus"></a>

```python
desiredv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_role`<sup>Required</sup> <a name="instance_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```python
instance_role: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maxv_cpus`<sup>Required</sup> <a name="maxv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxvCpus"></a>

```python
maxv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minv_cpus`<sup>Required</sup> <a name="minv_cpus" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minvCpus"></a>

```python
minv_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `placement_group`<sup>Required</sup> <a name="placement_group" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```python
placement_group: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_iam_fleet_role`<sup>Required</sup> <a name="spot_iam_fleet_role" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```python
spot_iam_fleet_role: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_to_latest_image_version`<sup>Required</sup> <a name="update_to_latest_image_version" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.updateToLatestImageVersion"></a>

```python
update_to_latest_image_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentComputeResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---


### BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference <a name="BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes">reset_min_scale_down_delay_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_min_scale_down_delay_minutes` <a name="reset_min_scale_down_delay_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.resetMinScaleDownDelayMinutes"></a>

```python
def reset_min_scale_down_delay_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput">min_scale_down_delay_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes">min_scale_down_delay_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `min_scale_down_delay_minutes_input`<sup>Optional</sup> <a name="min_scale_down_delay_minutes_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutesInput"></a>

```python
min_scale_down_delay_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_scale_down_delay_minutes`<sup>Required</sup> <a name="min_scale_down_delay_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.minScaleDownDelayMinutes"></a>

```python
min_scale_down_delay_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentComputeResourcesScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesScalingPolicy">BatchComputeEnvironmentComputeResourcesScalingPolicy</a>

---


### BatchComputeEnvironmentEksConfigurationOutputReference <a name="BatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn">reset_eks_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace">reset_kubernetes_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eks_cluster_arn` <a name="reset_eks_cluster_arn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetEksClusterArn"></a>

```python
def reset_eks_cluster_arn() -> None
```

##### `reset_kubernetes_namespace` <a name="reset_kubernetes_namespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resetKubernetesNamespace"></a>

```python
def reset_kubernetes_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput">eks_cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput">kubernetes_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">eks_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eks_cluster_arn_input`<sup>Optional</sup> <a name="eks_cluster_arn_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput"></a>

```python
eks_cluster_arn_input: str
```

- *Type:* str

---

##### `kubernetes_namespace_input`<sup>Optional</sup> <a name="kubernetes_namespace_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput"></a>

```python
kubernetes_namespace_input: str
```

- *Type:* str

---

##### `eks_cluster_arn`<sup>Required</sup> <a name="eks_cluster_arn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```python
eks_cluster_arn: str
```

- *Type:* str

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentEksConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---


### BatchComputeEnvironmentUpdatePolicyOutputReference <a name="BatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import batch_compute_environment

batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes">reset_job_execution_timeout_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate">reset_terminate_jobs_on_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_job_execution_timeout_minutes` <a name="reset_job_execution_timeout_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetJobExecutionTimeoutMinutes"></a>

```python
def reset_job_execution_timeout_minutes() -> None
```

##### `reset_terminate_jobs_on_update` <a name="reset_terminate_jobs_on_update" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resetTerminateJobsOnUpdate"></a>

```python
def reset_terminate_jobs_on_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput">job_execution_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput">terminate_jobs_on_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">job_execution_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">terminate_jobs_on_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_execution_timeout_minutes_input`<sup>Optional</sup> <a name="job_execution_timeout_minutes_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput"></a>

```python
job_execution_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminate_jobs_on_update_input`<sup>Optional</sup> <a name="terminate_jobs_on_update_input" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput"></a>

```python
terminate_jobs_on_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `job_execution_timeout_minutes`<sup>Required</sup> <a name="job_execution_timeout_minutes" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```python
job_execution_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminate_jobs_on_update`<sup>Required</sup> <a name="terminate_jobs_on_update" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```python
terminate_jobs_on_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BatchComputeEnvironmentUpdatePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---



