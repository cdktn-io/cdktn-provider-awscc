# `omicsWorkflowVersion` Submodule <a name="`omicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.omicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsWorkflowVersion <a name="OmicsWorkflowVersion" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  version_name: str,
  workflow_id: str,
  accelerators: str = None,
  definition_uri: str = None,
  description: str = None,
  engine: str = None,
  main: str = None,
  parameter_template: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate] = None,
  storage_capacity: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  workflow_bucket_owner_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.workflowId">workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.accelerators">accelerators</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.definitionUri">definition_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.main">main</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.parameterTemplate">parameter_template</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource tags. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.workflowBucketOwnerId">workflow_bucket_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.versionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}.

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.workflowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}.

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.accelerators"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}.

---

##### `definition_uri`<sup>Optional</sup> <a name="definition_uri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.definitionUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.main"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}.

---

##### `parameter_template`<sup>Optional</sup> <a name="parameter_template" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.parameterTemplate"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}.

---

##### `storage_capacity`<sup>Optional</sup> <a name="storage_capacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.storageCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#tags OmicsWorkflowVersion#tags}

---

##### `workflow_bucket_owner_id`<sup>Optional</sup> <a name="workflow_bucket_owner_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.Initializer.parameter.workflowBucketOwnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate">put_parameter_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri">reset_definition_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain">reset_main</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate">reset_parameter_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity">reset_storage_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId">reset_workflow_bucket_owner_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameter_template` <a name="put_parameter_template" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate"></a>

```python
def put_parameter_template(
  value: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.putParameterTemplate.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]

---

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_definition_uri` <a name="reset_definition_uri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDefinitionUri"></a>

```python
def reset_definition_uri() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_main` <a name="reset_main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetMain"></a>

```python
def reset_main() -> None
```

##### `reset_parameter_template` <a name="reset_parameter_template" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetParameterTemplate"></a>

```python
def reset_parameter_template() -> None
```

##### `reset_storage_capacity` <a name="reset_storage_capacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageCapacity"></a>

```python
def reset_storage_capacity() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_workflow_bucket_owner_id` <a name="reset_workflow_bucket_owner_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.resetWorkflowBucketOwnerId"></a>

```python
def reset_workflow_bucket_owner_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OmicsWorkflowVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate">parameter_template</a></code> | <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput">accelerators_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput">definition_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput">main_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput">parameter_template_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput">storage_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput">version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput">workflow_bucket_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput">workflow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators">accelerators</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri">definition_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main">main</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId">workflow_bucket_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId">workflow_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter_template`<sup>Required</sup> <a name="parameter_template" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplate"></a>

```python
parameter_template: OmicsWorkflowVersionParameterTemplateMap
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap">OmicsWorkflowVersionParameterTemplateMap</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.acceleratorsInput"></a>

```python
accelerators_input: str
```

- *Type:* str

---

##### `definition_uri_input`<sup>Optional</sup> <a name="definition_uri_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUriInput"></a>

```python
definition_uri_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `main_input`<sup>Optional</sup> <a name="main_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.mainInput"></a>

```python
main_input: str
```

- *Type:* str

---

##### `parameter_template_input`<sup>Optional</sup> <a name="parameter_template_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.parameterTemplateInput"></a>

```python
parameter_template_input: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]

---

##### `storage_capacity_input`<sup>Optional</sup> <a name="storage_capacity_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacityInput"></a>

```python
storage_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_name_input`<sup>Optional</sup> <a name="version_name_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionNameInput"></a>

```python
version_name_input: str
```

- *Type:* str

---

##### `workflow_bucket_owner_id_input`<sup>Optional</sup> <a name="workflow_bucket_owner_id_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerIdInput"></a>

```python
workflow_bucket_owner_id_input: str
```

- *Type:* str

---

##### `workflow_id_input`<sup>Optional</sup> <a name="workflow_id_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowIdInput"></a>

```python
workflow_id_input: str
```

- *Type:* str

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.accelerators"></a>

```python
accelerators: str
```

- *Type:* str

---

##### `definition_uri`<sup>Required</sup> <a name="definition_uri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.definitionUri"></a>

```python
definition_uri: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `main`<sup>Required</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.main"></a>

```python
main: str
```

- *Type:* str

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `workflow_bucket_owner_id`<sup>Required</sup> <a name="workflow_bucket_owner_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```python
workflow_bucket_owner_id: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsWorkflowVersionConfig <a name="OmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  version_name: str,
  workflow_id: str,
  accelerators: str = None,
  definition_uri: str = None,
  description: str = None,
  engine: str = None,
  main: str = None,
  parameter_template: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate] = None,
  storage_capacity: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  workflow_bucket_owner_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName">version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId">workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators">accelerators</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri">definition_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main">main</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate">parameter_template</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of resource tags. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId">workflow_bucket_owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#version_name OmicsWorkflowVersion#version_name}.

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_id OmicsWorkflowVersion#workflow_id}.

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.accelerators"></a>

```python
accelerators: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#accelerators OmicsWorkflowVersion#accelerators}.

---

##### `definition_uri`<sup>Optional</sup> <a name="definition_uri" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.definitionUri"></a>

```python
definition_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#definition_uri OmicsWorkflowVersion#definition_uri}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#engine OmicsWorkflowVersion#engine}.

---

##### `main`<sup>Optional</sup> <a name="main" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.main"></a>

```python
main: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#main OmicsWorkflowVersion#main}.

---

##### `parameter_template`<sup>Optional</sup> <a name="parameter_template" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.parameterTemplate"></a>

```python
parameter_template: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#parameter_template OmicsWorkflowVersion#parameter_template}.

---

##### `storage_capacity`<sup>Optional</sup> <a name="storage_capacity" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_capacity OmicsWorkflowVersion#storage_capacity}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#storage_type OmicsWorkflowVersion#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of resource tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#tags OmicsWorkflowVersion#tags}

---

##### `workflow_bucket_owner_id`<sup>Optional</sup> <a name="workflow_bucket_owner_id" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionConfig.property.workflowBucketOwnerId"></a>

```python
workflow_bucket_owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#workflow_bucket_owner_id OmicsWorkflowVersion#workflow_bucket_owner_id}.

---

### OmicsWorkflowVersionParameterTemplate <a name="OmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate(
  description: str = None,
  optional: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional">optional</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#description OmicsWorkflowVersion#description}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate.property.optional"></a>

```python
optional: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_workflow_version#optional OmicsWorkflowVersion#optional}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsWorkflowVersionParameterTemplateMap <a name="OmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get"></a>

```python
def get(
  key: str
) -> OmicsWorkflowVersionParameterTemplateOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[OmicsWorkflowVersionParameterTemplate]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>]

---


### OmicsWorkflowVersionParameterTemplateOutputReference <a name="OmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_workflow_version

omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional">reset_optional</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_optional` <a name="reset_optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.resetOptional"></a>

```python
def reset_optional() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput">optional_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional">optional</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `optional_input`<sup>Optional</sup> <a name="optional_input" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optionalInput"></a>

```python
optional_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```python
optional: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsWorkflowVersionParameterTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsWorkflowVersion.OmicsWorkflowVersionParameterTemplate">OmicsWorkflowVersionParameterTemplate</a>

---



