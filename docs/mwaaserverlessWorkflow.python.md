# `mwaaserverlessWorkflow` Submodule <a name="`mwaaserverlessWorkflow` Submodule" id="@cdktn/provider-awscc.mwaaserverlessWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaserverlessWorkflow <a name="MwaaserverlessWorkflow" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow awscc_mwaaserverless_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition_s3_location: MwaaserverlessWorkflowDefinitionS3Location,
  role_arn: str,
  code: MwaaserverlessWorkflowCode = None,
  description: str = None,
  encryption_configuration: MwaaserverlessWorkflowEncryptionConfiguration = None,
  logging_configuration: MwaaserverlessWorkflowLoggingConfiguration = None,
  name: str = None,
  network_configuration: MwaaserverlessWorkflowNetworkConfiguration = None,
  tags: typing.Mapping[str] = None,
  trigger_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | The location of code artifacts in Amazon S3 for the workflow. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs to be applied as tags. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.triggerMode">trigger_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition_s3_location`<sup>Required</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.definitionS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

The location of code artifacts in Amazon S3 for the workflow.

Modeled as a single-member container so it stays extensible to future artifact types (e.g. OCI images).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#code MwaaserverlessWorkflow#code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of key-value pairs to be applied as tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#tags MwaaserverlessWorkflow#tags}

---

##### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.triggerMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location">put_definition_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode">reset_trigger_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code` <a name="put_code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode"></a>

```python
def put_code(
  s3_location: MwaaserverlessWorkflowCodeS3Location = None
) -> None
```

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#s3_location MwaaserverlessWorkflow#s3_location}.

---

##### `put_definition_s3_location` <a name="put_definition_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location"></a>

```python
def put_definition_s3_location(
  bucket: str,
  object_key: str,
  version_id: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

###### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.objectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

###### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_id: str = None,
  type: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}.

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  log_group_name: str = None
) -> None
```

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}.

---

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_trigger_mode` <a name="reset_trigger_mode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode"></a>

```python
def reset_trigger_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwaaserverlessWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwaaserverlessWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MwaaserverlessWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference">MwaaserverlessWorkflowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeSnapshottedAt">code_snapshotted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration">schedule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus">workflow_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion">workflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeInput">code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput">definition_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput">trigger_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode">trigger_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.code"></a>

```python
code: MwaaserverlessWorkflowCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference">MwaaserverlessWorkflowCodeOutputReference</a>

---

##### `code_snapshotted_at`<sup>Required</sup> <a name="code_snapshotted_at" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeSnapshottedAt"></a>

```python
code_snapshotted_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `definition_s3_location`<sup>Required</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location"></a>

```python
definition_s3_location: MwaaserverlessWorkflowDefinitionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration"></a>

```python
encryption_configuration: MwaaserverlessWorkflowEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration"></a>

```python
logging_configuration: MwaaserverlessWorkflowLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration"></a>

```python
network_configuration: MwaaserverlessWorkflowNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a>

---

##### `schedule_configuration`<sup>Required</sup> <a name="schedule_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration"></a>

```python
schedule_configuration: MwaaserverlessWorkflowScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a>

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `workflow_status`<sup>Required</sup> <a name="workflow_status" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus"></a>

```python
workflow_status: str
```

- *Type:* str

---

##### `workflow_version`<sup>Required</sup> <a name="workflow_version" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion"></a>

```python
workflow_version: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeInput"></a>

```python
code_input: IResolvable | MwaaserverlessWorkflowCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

---

##### `definition_s3_location_input`<sup>Optional</sup> <a name="definition_s3_location_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput"></a>

```python
definition_s3_location_input: IResolvable | MwaaserverlessWorkflowDefinitionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | MwaaserverlessWorkflowEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: IResolvable | MwaaserverlessWorkflowLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | MwaaserverlessWorkflowNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trigger_mode_input`<sup>Optional</sup> <a name="trigger_mode_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput"></a>

```python
trigger_mode_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trigger_mode`<sup>Required</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaserverlessWorkflowCode <a name="MwaaserverlessWorkflowCode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowCode(
  s3_location: MwaaserverlessWorkflowCodeS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#s3_location MwaaserverlessWorkflow#s3_location}. |

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.property.s3Location"></a>

```python
s3_location: MwaaserverlessWorkflowCodeS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#s3_location MwaaserverlessWorkflow#s3_location}.

---

### MwaaserverlessWorkflowCodeS3Location <a name="MwaaserverlessWorkflowCodeS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location(
  bucket: str = None,
  object_key: str = None,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.objectKey">object_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowConfig <a name="MwaaserverlessWorkflowConfig" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  definition_s3_location: MwaaserverlessWorkflowDefinitionS3Location,
  role_arn: str,
  code: MwaaserverlessWorkflowCode = None,
  description: str = None,
  encryption_configuration: MwaaserverlessWorkflowEncryptionConfiguration = None,
  logging_configuration: MwaaserverlessWorkflowLoggingConfiguration = None,
  name: str = None,
  network_configuration: MwaaserverlessWorkflowNetworkConfiguration = None,
  tags: typing.Mapping[str] = None,
  trigger_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | The location of code artifacts in Amazon S3 for the workflow. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs to be applied as tags. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode">trigger_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `definition_s3_location`<sup>Required</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location"></a>

```python
definition_s3_location: MwaaserverlessWorkflowDefinitionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.code"></a>

```python
code: MwaaserverlessWorkflowCode
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

The location of code artifacts in Amazon S3 for the workflow.

Modeled as a single-member container so it stays extensible to future artifact types (e.g. OCI images).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#code MwaaserverlessWorkflow#code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: MwaaserverlessWorkflowEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration"></a>

```python
logging_configuration: MwaaserverlessWorkflowLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration"></a>

```python
network_configuration: MwaaserverlessWorkflowNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value pairs to be applied as tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#tags MwaaserverlessWorkflow#tags}

---

##### `trigger_mode`<sup>Optional</sup> <a name="trigger_mode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode"></a>

```python
trigger_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}.

---

### MwaaserverlessWorkflowDefinitionS3Location <a name="MwaaserverlessWorkflowDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location(
  bucket: str,
  object_key: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey">object_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowEncryptionConfiguration <a name="MwaaserverlessWorkflowEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration(
  kms_key_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}.

---

### MwaaserverlessWorkflowLoggingConfiguration <a name="MwaaserverlessWorkflowLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration(
  log_group_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}. |

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}.

---

### MwaaserverlessWorkflowNetworkConfiguration <a name="MwaaserverlessWorkflowNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}.

---

### MwaaserverlessWorkflowScheduleConfiguration <a name="MwaaserverlessWorkflowScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### MwaaserverlessWorkflowCodeOutputReference <a name="MwaaserverlessWorkflowCodeOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location"></a>

```python
def put_s3_location(
  bucket: str = None,
  object_key: str = None,
  version_id: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

###### `object_key`<sup>Optional</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location.parameter.objectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

###### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference">MwaaserverlessWorkflowCodeS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3Location"></a>

```python
s3_location: MwaaserverlessWorkflowCodeS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference">MwaaserverlessWorkflowCodeS3LocationOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | MwaaserverlessWorkflowCodeS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

---


### MwaaserverlessWorkflowCodeS3LocationOutputReference <a name="MwaaserverlessWorkflowCodeS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetObjectKey">reset_object_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_object_key` <a name="reset_object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetObjectKey"></a>

```python
def reset_object_key() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKeyInput">object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `object_key_input`<sup>Optional</sup> <a name="object_key_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKeyInput"></a>

```python
object_key_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowCodeS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

---


### MwaaserverlessWorkflowDefinitionS3LocationOutputReference <a name="MwaaserverlessWorkflowDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput">object_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey">object_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `object_key_input`<sup>Optional</sup> <a name="object_key_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```python
object_key_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `object_key`<sup>Required</sup> <a name="object_key" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey"></a>

```python
object_key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowDefinitionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---


### MwaaserverlessWorkflowEncryptionConfigurationOutputReference <a name="MwaaserverlessWorkflowEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---


### MwaaserverlessWorkflowLoggingConfigurationOutputReference <a name="MwaaserverlessWorkflowLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---


### MwaaserverlessWorkflowNetworkConfigurationOutputReference <a name="MwaaserverlessWorkflowNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MwaaserverlessWorkflowNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---


### MwaaserverlessWorkflowScheduleConfigurationOutputReference <a name="MwaaserverlessWorkflowScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mwaaserverless_workflow

mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MwaaserverlessWorkflowScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a>

---



