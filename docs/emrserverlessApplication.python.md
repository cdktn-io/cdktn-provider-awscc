# `emrserverlessApplication` Submodule <a name="`emrserverlessApplication` Submodule" id="@cdktn/provider-awscc.emrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrserverlessApplication <a name="EmrserverlessApplication" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application awscc_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  release_label: str,
  type: str,
  architecture: str = None,
  auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration = None,
  auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration = None,
  image_configuration: EmrserverlessApplicationImageConfiguration = None,
  initial_capacity: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity] = None,
  maximum_capacity: EmrserverlessApplicationMaximumCapacity = None,
  name: str = None,
  network_configuration: EmrserverlessApplicationNetworkConfiguration = None,
  tags: IResolvable | typing.List[EmrserverlessApplicationTags] = None,
  worker_type_specifications: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel">release_label</a></code> | <code>str</code> | EMR release label. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | The cpu architecture of an application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | Configuration for Auto Start of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | Configuration for Auto Stop of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | The image configuration. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity">initial_capacity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]</code> | Initial capacity initialized when an Application is started. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | User friendly Application name. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | Network Configuration for customer VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]</code> | Tag map with key and value. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.workerTypeSpecifications">worker_type_specifications</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]</code> | The key-value pairs that specify worker type to WorkerTypeSpecificationInput. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.releaseLabel"></a>

- *Type:* str

EMR release label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.type"></a>

- *Type:* str

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.architecture"></a>

- *Type:* str

The cpu architecture of an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}

---

##### `auto_start_configuration`<sup>Optional</sup> <a name="auto_start_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStartConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

Configuration for Auto Start of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `auto_stop_configuration`<sup>Optional</sup> <a name="auto_stop_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.autoStopConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

Configuration for Auto Stop of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.imageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `initial_capacity`<sup>Optional</sup> <a name="initial_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.initialCapacity"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]

Initial capacity initialized when an Application is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximum_capacity`<sup>Optional</sup> <a name="maximum_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.maximumCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.name"></a>

- *Type:* str

User friendly Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

Network Configuration for customer VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]

Tag map with key and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}

---

##### `worker_type_specifications`<sup>Optional</sup> <a name="worker_type_specifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.workerTypeSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]

The key-value pairs that specify worker type to WorkerTypeSpecificationInput.

This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_type_specifications EmrserverlessApplication#worker_type_specifications}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration">put_auto_start_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration">put_auto_stop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration">put_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity">put_initial_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity">put_maximum_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications">put_worker_type_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration">reset_auto_start_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration">reset_auto_stop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration">reset_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity">reset_initial_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity">reset_maximum_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetWorkerTypeSpecifications">reset_worker_type_specifications</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_start_configuration` <a name="put_auto_start_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration"></a>

```python
def put_auto_start_configuration(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the Application will automatically start. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

##### `put_auto_stop_configuration` <a name="put_auto_stop_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration"></a>

```python
def put_auto_stop_configuration(
  enabled: bool | IResolvable = None,
  idle_timeout_minutes: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the Application will automatically stop after being idle. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

###### `idle_timeout_minutes`<sup>Optional</sup> <a name="idle_timeout_minutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.idleTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}

---

##### `put_image_configuration` <a name="put_image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration"></a>

```python
def put_image_configuration(
  image_uri: str = None
) -> None
```

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration.parameter.imageUri"></a>

- *Type:* str

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

##### `put_initial_capacity` <a name="put_initial_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity"></a>

```python
def put_initial_capacity(
  value: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]

---

##### `put_maximum_capacity` <a name="put_maximum_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity"></a>

```python
def put_maximum_capacity(
  cpu: str = None,
  disk: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.cpu"></a>

- *Type:* str

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.disk"></a>

- *Type:* str

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.memory"></a>

- *Type:* str

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The ID of the security groups in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EmrserverlessApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]

---

##### `put_worker_type_specifications` <a name="put_worker_type_specifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications"></a>

```python
def put_worker_type_specifications(
  value: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.putWorkerTypeSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]

---

##### `reset_architecture` <a name="reset_architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_auto_start_configuration` <a name="reset_auto_start_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration"></a>

```python
def reset_auto_start_configuration() -> None
```

##### `reset_auto_stop_configuration` <a name="reset_auto_stop_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration"></a>

```python
def reset_auto_stop_configuration() -> None
```

##### `reset_image_configuration` <a name="reset_image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration"></a>

```python
def reset_image_configuration() -> None
```

##### `reset_initial_capacity` <a name="reset_initial_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity"></a>

```python
def reset_initial_capacity() -> None
```

##### `reset_maximum_capacity` <a name="reset_maximum_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity"></a>

```python
def reset_maximum_capacity() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_worker_type_specifications` <a name="reset_worker_type_specifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.resetWorkerTypeSpecifications"></a>

```python
def reset_worker_type_specifications() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EmrserverlessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EmrserverlessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EmrserverlessApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity">initial_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList">EmrserverlessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecifications">worker_type_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap">EmrserverlessApplicationWorkerTypeSpecificationsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput">auto_start_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput">auto_stop_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput">image_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput">initial_capacity_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput">maximum_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput">release_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecificationsInput">worker_type_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel">release_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_start_configuration`<sup>Required</sup> <a name="auto_start_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration"></a>

```python
auto_start_configuration: EmrserverlessApplicationAutoStartConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `auto_stop_configuration`<sup>Required</sup> <a name="auto_stop_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration"></a>

```python
auto_stop_configuration: EmrserverlessApplicationAutoStopConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration"></a>

```python
image_configuration: EmrserverlessApplicationImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `initial_capacity`<sup>Required</sup> <a name="initial_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity"></a>

```python
initial_capacity: EmrserverlessApplicationInitialCapacityList
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a>

---

##### `maximum_capacity`<sup>Required</sup> <a name="maximum_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity"></a>

```python
maximum_capacity: EmrserverlessApplicationMaximumCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration"></a>

```python
network_configuration: EmrserverlessApplicationNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tags"></a>

```python
tags: EmrserverlessApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList">EmrserverlessApplicationTagsList</a>

---

##### `worker_type_specifications`<sup>Required</sup> <a name="worker_type_specifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecifications"></a>

```python
worker_type_specifications: EmrserverlessApplicationWorkerTypeSpecificationsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap">EmrserverlessApplicationWorkerTypeSpecificationsMap</a>

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `auto_start_configuration_input`<sup>Optional</sup> <a name="auto_start_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput"></a>

```python
auto_start_configuration_input: IResolvable | EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `auto_stop_configuration_input`<sup>Optional</sup> <a name="auto_stop_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput"></a>

```python
auto_stop_configuration_input: IResolvable | EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `image_configuration_input`<sup>Optional</sup> <a name="image_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput"></a>

```python
image_configuration_input: IResolvable | EmrserverlessApplicationImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `initial_capacity_input`<sup>Optional</sup> <a name="initial_capacity_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput"></a>

```python
initial_capacity_input: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]

---

##### `maximum_capacity_input`<sup>Optional</sup> <a name="maximum_capacity_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput"></a>

```python
maximum_capacity_input: IResolvable | EmrserverlessApplicationMaximumCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | EmrserverlessApplicationNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `release_label_input`<sup>Optional</sup> <a name="release_label_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput"></a>

```python
release_label_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EmrserverlessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `worker_type_specifications_input`<sup>Optional</sup> <a name="worker_type_specifications_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.workerTypeSpecificationsInput"></a>

```python
worker_type_specifications_input: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EmrserverlessApplicationAutoStartConfiguration <a name="EmrserverlessApplicationAutoStartConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the Application will automatically start. Defaults to true. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the Application will automatically start. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

### EmrserverlessApplicationAutoStopConfiguration <a name="EmrserverlessApplicationAutoStopConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration(
  enabled: bool | IResolvable = None,
  idle_timeout_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the Application will automatically stop after being idle. Defaults to true. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes">idle_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the Application will automatically stop after being idle. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}

---

##### `idle_timeout_minutes`<sup>Optional</sup> <a name="idle_timeout_minutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes"></a>

```python
idle_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}

---

### EmrserverlessApplicationConfig <a name="EmrserverlessApplicationConfig" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  release_label: str,
  type: str,
  architecture: str = None,
  auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration = None,
  auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration = None,
  image_configuration: EmrserverlessApplicationImageConfiguration = None,
  initial_capacity: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity] = None,
  maximum_capacity: EmrserverlessApplicationMaximumCapacity = None,
  name: str = None,
  network_configuration: EmrserverlessApplicationNetworkConfiguration = None,
  tags: IResolvable | typing.List[EmrserverlessApplicationTags] = None,
  worker_type_specifications: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel">release_label</a></code> | <code>str</code> | EMR release label. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.type">type</a></code> | <code>str</code> | The type of the application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture">architecture</a></code> | <code>str</code> | The cpu architecture of an application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration">auto_start_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | Configuration for Auto Start of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration">auto_stop_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | Configuration for Auto Stop of Application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | The image configuration. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity">initial_capacity</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]</code> | Initial capacity initialized when an Application is started. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity">maximum_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.name">name</a></code> | <code>str</code> | User friendly Application name. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | Network Configuration for customer VPC connectivity. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]</code> | Tag map with key and value. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.workerTypeSpecifications">worker_type_specifications</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]</code> | The key-value pairs that specify worker type to WorkerTypeSpecificationInput. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `release_label`<sup>Required</sup> <a name="release_label" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel"></a>

```python
release_label: str
```

- *Type:* str

EMR release label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

The cpu architecture of an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}

---

##### `auto_start_configuration`<sup>Optional</sup> <a name="auto_start_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration"></a>

```python
auto_start_configuration: EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

Configuration for Auto Start of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `auto_stop_configuration`<sup>Optional</sup> <a name="auto_stop_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration"></a>

```python
auto_stop_configuration: EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

Configuration for Auto Stop of Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration"></a>

```python
image_configuration: EmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `initial_capacity`<sup>Optional</sup> <a name="initial_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity"></a>

```python
initial_capacity: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]

Initial capacity initialized when an Application is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `maximum_capacity`<sup>Optional</sup> <a name="maximum_capacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity"></a>

```python
maximum_capacity: EmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User friendly Application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration"></a>

```python
network_configuration: EmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

Network Configuration for customer VPC connectivity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EmrserverlessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]

Tag map with key and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}

---

##### `worker_type_specifications`<sup>Optional</sup> <a name="worker_type_specifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationConfig.property.workerTypeSpecifications"></a>

```python
worker_type_specifications: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]

The key-value pairs that specify worker type to WorkerTypeSpecificationInput.

This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_type_specifications EmrserverlessApplication#worker_type_specifications}

---

### EmrserverlessApplicationImageConfiguration <a name="EmrserverlessApplicationImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationImageConfiguration(
  image_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri">image_uri</a></code> | <code>str</code> | The URI of an image in the Amazon ECR registry. |

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

### EmrserverlessApplicationInitialCapacity <a name="EmrserverlessApplicationInitialCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacity(
  key: str = None,
  value: EmrserverlessApplicationInitialCapacityValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.key">key</a></code> | <code>str</code> | Worker type for an analytics framework. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.key"></a>

```python
key: str
```

- *Type:* str

Worker type for an analytics framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.value"></a>

```python
value: EmrserverlessApplicationInitialCapacityValue
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}.

---

### EmrserverlessApplicationInitialCapacityValue <a name="EmrserverlessApplicationInitialCapacityValue" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue(
  worker_configuration: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration = None,
  worker_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | Initial count of workers to be initialized when an Application is started. |

---

##### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerConfiguration"></a>

```python
worker_configuration: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}.

---

##### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Initial count of workers to be initialized when an Application is started.

This count will be continued to be maintained until the Application is stopped

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}

---

### EmrserverlessApplicationInitialCapacityValueWorkerConfiguration <a name="EmrserverlessApplicationInitialCapacityValueWorkerConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration(
  cpu: str = None,
  disk: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.cpu">cpu</a></code> | <code>str</code> | Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.disk">disk</a></code> | <code>str</code> | Per worker Disk resource. GB is the only supported unit and specifying GB is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.memory">memory</a></code> | <code>str</code> | Per worker memory resource. GB is the only supported unit and specifying GB is optional. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.disk"></a>

```python
disk: str
```

- *Type:* str

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration.property.memory"></a>

```python
memory: str
```

- *Type:* str

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

### EmrserverlessApplicationMaximumCapacity <a name="EmrserverlessApplicationMaximumCapacity" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationMaximumCapacity(
  cpu: str = None,
  disk: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu">cpu</a></code> | <code>str</code> | Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk">disk</a></code> | <code>str</code> | Per worker Disk resource. GB is the only supported unit and specifying GB is optional. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory">memory</a></code> | <code>str</code> | Per worker memory resource. GB is the only supported unit and specifying GB is optional. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk"></a>

```python
disk: str
```

- *Type:* str

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory"></a>

```python
memory: str
```

- *Type:* str

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

### EmrserverlessApplicationNetworkConfiguration <a name="EmrserverlessApplicationNetworkConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The ID of the security groups in the VPC to which you want to connect your job or application. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The ID of the subnets in the VPC to which you want to connect your job or application. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the security groups in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the subnets in the VPC to which you want to connect your job or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}

---

### EmrserverlessApplicationTags <a name="EmrserverlessApplicationTags" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.key">key</a></code> | <code>str</code> | The value for the tag. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#key EmrserverlessApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#value EmrserverlessApplication#value}

---

### EmrserverlessApplicationWorkerTypeSpecifications <a name="EmrserverlessApplicationWorkerTypeSpecifications" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications(
  image_configuration: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | The image configuration. |

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications.property.imageConfiguration"></a>

```python
image_configuration: EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

The image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

### EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration <a name="EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration(
  image_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.property.imageUri">image_uri</a></code> | <code>str</code> | The URI of an image in the Amazon ECR registry. |

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrserverlessApplicationAutoStartConfigurationOutputReference <a name="EmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationAutoStartConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---


### EmrserverlessApplicationAutoStopConfigurationOutputReference <a name="EmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes">reset_idle_timeout_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_idle_timeout_minutes` <a name="reset_idle_timeout_minutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes"></a>

```python
def reset_idle_timeout_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput">idle_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">idle_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `idle_timeout_minutes_input`<sup>Optional</sup> <a name="idle_timeout_minutes_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput"></a>

```python
idle_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `idle_timeout_minutes`<sup>Required</sup> <a name="idle_timeout_minutes" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```python
idle_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationAutoStopConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---


### EmrserverlessApplicationImageConfigurationOutputReference <a name="EmrserverlessApplicationImageConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityList <a name="EmrserverlessApplicationInitialCapacityList" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EmrserverlessApplicationInitialCapacity]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>]

---


### EmrserverlessApplicationInitialCapacityOutputReference <a name="EmrserverlessApplicationInitialCapacityOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue"></a>

```python
def put_value(
  worker_configuration: EmrserverlessApplicationInitialCapacityValueWorkerConfiguration = None,
  worker_count: typing.Union[int, float] = None
) -> None
```

###### `worker_configuration`<sup>Optional</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue.parameter.workerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}.

---

###### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putValue.parameter.workerCount"></a>

- *Type:* typing.Union[int, float]

Initial count of workers to be initialized when an Application is started.

This count will be continued to be maintained until the Application is stopped

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference">EmrserverlessApplicationInitialCapacityValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.value"></a>

```python
value: EmrserverlessApplicationInitialCapacityValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference">EmrserverlessApplicationInitialCapacityValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | EmrserverlessApplicationInitialCapacityValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationInitialCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>

---


### EmrserverlessApplicationInitialCapacityValueOutputReference <a name="EmrserverlessApplicationInitialCapacityValueOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration">put_worker_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerConfiguration">reset_worker_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerCount">reset_worker_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_worker_configuration` <a name="put_worker_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration"></a>

```python
def put_worker_configuration(
  cpu: str = None,
  disk: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration.parameter.cpu"></a>

- *Type:* str

Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}

---

###### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration.parameter.disk"></a>

- *Type:* str

Per worker Disk resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.putWorkerConfiguration.parameter.memory"></a>

- *Type:* str

Per worker memory resource. GB is the only supported unit and specifying GB is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}

---

##### `reset_worker_configuration` <a name="reset_worker_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerConfiguration"></a>

```python
def reset_worker_configuration() -> None
```

##### `reset_worker_count` <a name="reset_worker_count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.resetWorkerCount"></a>

```python
def reset_worker_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfigurationInput">worker_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCountInput">worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_configuration`<sup>Required</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration"></a>

```python
worker_configuration: EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a>

---

##### `worker_configuration_input`<sup>Optional</sup> <a name="worker_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfigurationInput"></a>

```python
worker_configuration_input: IResolvable | EmrserverlessApplicationInitialCapacityValueWorkerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---

##### `worker_count_input`<sup>Optional</sup> <a name="worker_count_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCountInput"></a>

```python
worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationInitialCapacityValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValue">EmrserverlessApplicationInitialCapacityValue</a>

---


### EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference <a name="EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationInitialCapacityValueWorkerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationInitialCapacityValueWorkerConfiguration">EmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---


### EmrserverlessApplicationMaximumCapacityOutputReference <a name="EmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk">reset_disk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_disk` <a name="reset_disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk"></a>

```python
def reset_disk() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationMaximumCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---


### EmrserverlessApplicationNetworkConfigurationOutputReference <a name="EmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---


### EmrserverlessApplicationTagsList <a name="EmrserverlessApplicationTagsList" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EmrserverlessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EmrserverlessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>]

---


### EmrserverlessApplicationTagsOutputReference <a name="EmrserverlessApplicationTagsOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationTags">EmrserverlessApplicationTags</a>

---


### EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference <a name="EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---


### EmrserverlessApplicationWorkerTypeSpecificationsMap <a name="EmrserverlessApplicationWorkerTypeSpecificationsMap" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get"></a>

```python
def get(
  key: str
) -> EmrserverlessApplicationWorkerTypeSpecificationsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[EmrserverlessApplicationWorkerTypeSpecifications]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>]

---


### EmrserverlessApplicationWorkerTypeSpecificationsOutputReference <a name="EmrserverlessApplicationWorkerTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import emrserverless_application

emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration">put_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resetImageConfiguration">reset_image_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image_configuration` <a name="put_image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration"></a>

```python
def put_image_configuration(
  image_uri: str = None
) -> None
```

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.putImageConfiguration.parameter.imageUri"></a>

- *Type:* str

The URI of an image in the Amazon ECR registry.

This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}

---

##### `reset_image_configuration` <a name="reset_image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resetImageConfiguration"></a>

```python
def reset_image_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfigurationInput">image_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration"></a>

```python
image_configuration: EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">EmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a>

---

##### `image_configuration_input`<sup>Optional</sup> <a name="image_configuration_input" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfigurationInput"></a>

```python
image_configuration_input: IResolvable | EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">EmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EmrserverlessApplicationWorkerTypeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrserverlessApplication.EmrserverlessApplicationWorkerTypeSpecifications">EmrserverlessApplicationWorkerTypeSpecifications</a>

---



