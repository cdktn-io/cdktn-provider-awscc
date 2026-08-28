# `osisPipeline` Submodule <a name="`osisPipeline` Submodule" id="@cdktn/provider-awscc.osisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipeline <a name="OsisPipeline" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline awscc_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipeline(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  max_units: typing.Union[int, float],
  min_units: typing.Union[int, float],
  pipeline_configuration_body: str,
  pipeline_name: str,
  buffer_options: OsisPipelineBufferOptions = None,
  encryption_at_rest_options: OsisPipelineEncryptionAtRestOptions = None,
  log_publishing_options: OsisPipelineLogPublishingOptions = None,
  pipeline_role_arn: str = None,
  resource_policy: OsisPipelineResourcePolicy = None,
  tags: IResolvable | typing.List[OsisPipelineTags] = None,
  vpc_options: OsisPipelineVpcOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName">pipeline_name</a></code> | <code>str</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions">buffer_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineRoleArn">pipeline_role_arn</a></code> | <code>str</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.maxUnits"></a>

- *Type:* typing.Union[int, float]

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.minUnits"></a>

- *Type:* typing.Union[int, float]

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineConfigurationBody"></a>

- *Type:* str

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* str

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `buffer_options`<sup>Optional</sup> <a name="buffer_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.bufferOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.encryptionAtRestOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.logPublishingOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `pipeline_role_arn`<sup>Optional</sup> <a name="pipeline_role_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.pipelineRoleArn"></a>

- *Type:* str

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions">put_buffer_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions">put_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions">put_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy">put_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions">put_vpc_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions">reset_buffer_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions">reset_encryption_at_rest_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions">reset_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn">reset_pipeline_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy">reset_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions">reset_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_buffer_options` <a name="put_buffer_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions"></a>

```python
def put_buffer_options(
  persistent_buffer_enabled: bool | IResolvable = None
) -> None
```

###### `persistent_buffer_enabled`<sup>Optional</sup> <a name="persistent_buffer_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions.parameter.persistentBufferEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether persistent buffering should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}

---

##### `put_encryption_at_rest_options` <a name="put_encryption_at_rest_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions"></a>

```python
def put_encryption_at_rest_options(
  kms_key_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions.parameter.kmsKeyArn"></a>

- *Type:* str

The KMS key to use for encrypting data. By default an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}

---

##### `put_log_publishing_options` <a name="put_log_publishing_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions"></a>

```python
def put_log_publishing_options(
  cloudwatch_log_destination: OsisPipelineLogPublishingOptionsCloudwatchLogDestination = None,
  is_logging_enabled: bool | IResolvable = None
) -> None
```

###### `cloudwatch_log_destination`<sup>Optional</sup> <a name="cloudwatch_log_destination" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.cloudwatchLogDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

###### `is_logging_enabled`<sup>Optional</sup> <a name="is_logging_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.isLoggingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether logs should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}

---

##### `put_resource_policy` <a name="put_resource_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy"></a>

```python
def put_resource_policy(
  policy: str = None
) -> None
```

###### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OsisPipelineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions"></a>

```python
def put_vpc_options(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_attachment_options: OsisPipelineVpcOptionsVpcAttachmentOptions = None,
  vpc_endpoint_management: str = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

A list of security groups associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

A list of subnet IDs associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}

---

###### `vpc_attachment_options`<sup>Optional</sup> <a name="vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.vpcAttachmentOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

Options for attaching a VPC to the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_attachment_options OsisPipeline#vpc_attachment_options}

---

###### `vpc_endpoint_management`<sup>Optional</sup> <a name="vpc_endpoint_management" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.vpcEndpointManagement"></a>

- *Type:* str

Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}

---

##### `reset_buffer_options` <a name="reset_buffer_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions"></a>

```python
def reset_buffer_options() -> None
```

##### `reset_encryption_at_rest_options` <a name="reset_encryption_at_rest_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions"></a>

```python
def reset_encryption_at_rest_options() -> None
```

##### `reset_log_publishing_options` <a name="reset_log_publishing_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions"></a>

```python
def reset_log_publishing_options() -> None
```

##### `reset_pipeline_role_arn` <a name="reset_pipeline_role_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn"></a>

```python
def reset_pipeline_role_arn() -> None
```

##### `reset_resource_policy` <a name="reset_resource_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy"></a>

```python
def reset_resource_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_options` <a name="reset_vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions"></a>

```python
def reset_vpc_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsisPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions">buffer_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls">ingest_endpoint_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn">pipeline_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints">vpc_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService">vpc_endpoint_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput">buffer_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput">encryption_at_rest_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput">log_publishing_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput">max_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput">min_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput">pipeline_configuration_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput">pipeline_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput">pipeline_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput">resource_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput">vpc_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn">pipeline_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `buffer_options`<sup>Required</sup> <a name="buffer_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions"></a>

```python
buffer_options: OsisPipelineBufferOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a>

---

##### `encryption_at_rest_options`<sup>Required</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: OsisPipelineEncryptionAtRestOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_endpoint_urls`<sup>Required</sup> <a name="ingest_endpoint_urls" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls"></a>

```python
ingest_endpoint_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions"></a>

```python
log_publishing_options: OsisPipelineLogPublishingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a>

---

##### `pipeline_arn`<sup>Required</sup> <a name="pipeline_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn"></a>

```python
pipeline_arn: str
```

- *Type:* str

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy"></a>

```python
resource_policy: OsisPipelineResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags"></a>

```python
tags: OsisPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a>

---

##### `vpc_endpoints`<sup>Required</sup> <a name="vpc_endpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints"></a>

```python
vpc_endpoints: OsisPipelineVpcEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a>

---

##### `vpc_endpoint_service`<sup>Required</sup> <a name="vpc_endpoint_service" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService"></a>

```python
vpc_endpoint_service: str
```

- *Type:* str

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a>

---

##### `buffer_options_input`<sup>Optional</sup> <a name="buffer_options_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput"></a>

```python
buffer_options_input: IResolvable | OsisPipelineBufferOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `encryption_at_rest_options_input`<sup>Optional</sup> <a name="encryption_at_rest_options_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput"></a>

```python
encryption_at_rest_options_input: IResolvable | OsisPipelineEncryptionAtRestOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `log_publishing_options_input`<sup>Optional</sup> <a name="log_publishing_options_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput"></a>

```python
log_publishing_options_input: IResolvable | OsisPipelineLogPublishingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `max_units_input`<sup>Optional</sup> <a name="max_units_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput"></a>

```python
max_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_units_input`<sup>Optional</sup> <a name="min_units_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput"></a>

```python
min_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_configuration_body_input`<sup>Optional</sup> <a name="pipeline_configuration_body_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput"></a>

```python
pipeline_configuration_body_input: str
```

- *Type:* str

---

##### `pipeline_name_input`<sup>Optional</sup> <a name="pipeline_name_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput"></a>

```python
pipeline_name_input: str
```

- *Type:* str

---

##### `pipeline_role_arn_input`<sup>Optional</sup> <a name="pipeline_role_arn_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput"></a>

```python
pipeline_role_arn_input: str
```

- *Type:* str

---

##### `resource_policy_input`<sup>Optional</sup> <a name="resource_policy_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput"></a>

```python
resource_policy_input: IResolvable | OsisPipelineResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OsisPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput"></a>

```python
vpc_options_input: IResolvable | OsisPipelineVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits"></a>

```python
max_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits"></a>

```python
min_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody"></a>

```python
pipeline_configuration_body: str
```

- *Type:* str

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

##### `pipeline_role_arn`<sup>Required</sup> <a name="pipeline_role_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn"></a>

```python
pipeline_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineBufferOptions <a name="OsisPipelineBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineBufferOptions(
  persistent_buffer_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled">persistent_buffer_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether persistent buffering should be enabled. |

---

##### `persistent_buffer_enabled`<sup>Optional</sup> <a name="persistent_buffer_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled"></a>

```python
persistent_buffer_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether persistent buffering should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}

---

### OsisPipelineConfig <a name="OsisPipelineConfig" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  max_units: typing.Union[int, float],
  min_units: typing.Union[int, float],
  pipeline_configuration_body: str,
  pipeline_name: str,
  buffer_options: OsisPipelineBufferOptions = None,
  encryption_at_rest_options: OsisPipelineEncryptionAtRestOptions = None,
  log_publishing_options: OsisPipelineLogPublishingOptions = None,
  pipeline_role_arn: str = None,
  resource_policy: OsisPipelineResourcePolicy = None,
  tags: IResolvable | typing.List[OsisPipelineTags] = None,
  vpc_options: OsisPipelineVpcOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits">max_units</a></code> | <code>typing.Union[int, float]</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits">min_units</a></code> | <code>typing.Union[int, float]</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody">pipeline_configuration_body</a></code> | <code>str</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName">pipeline_name</a></code> | <code>str</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions">buffer_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions">encryption_at_rest_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn">pipeline_role_arn</a></code> | <code>str</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `max_units`<sup>Required</sup> <a name="max_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits"></a>

```python
max_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `min_units`<sup>Required</sup> <a name="min_units" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits"></a>

```python
min_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `pipeline_configuration_body`<sup>Required</sup> <a name="pipeline_configuration_body" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody"></a>

```python
pipeline_configuration_body: str
```

- *Type:* str

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `buffer_options`<sup>Optional</sup> <a name="buffer_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions"></a>

```python
buffer_options: OsisPipelineBufferOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `encryption_at_rest_options`<sup>Optional</sup> <a name="encryption_at_rest_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions"></a>

```python
encryption_at_rest_options: OsisPipelineEncryptionAtRestOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions"></a>

```python
log_publishing_options: OsisPipelineLogPublishingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `pipeline_role_arn`<sup>Optional</sup> <a name="pipeline_role_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn"></a>

```python
pipeline_role_arn: str
```

- *Type:* str

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy"></a>

```python
resource_policy: OsisPipelineResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OsisPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

### OsisPipelineEncryptionAtRestOptions <a name="OsisPipelineEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineEncryptionAtRestOptions(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The KMS key to use for encrypting data. By default an AWS owned key is used. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The KMS key to use for encrypting data. By default an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}

---

### OsisPipelineLogPublishingOptions <a name="OsisPipelineLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptions(
  cloudwatch_log_destination: OsisPipelineLogPublishingOptionsCloudwatchLogDestination = None,
  is_logging_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination">cloudwatch_log_destination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled">is_logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether logs should be published. |

---

##### `cloudwatch_log_destination`<sup>Optional</sup> <a name="cloudwatch_log_destination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination"></a>

```python
cloudwatch_log_destination: OsisPipelineLogPublishingOptionsCloudwatchLogDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

##### `is_logging_enabled`<sup>Optional</sup> <a name="is_logging_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled"></a>

```python
is_logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether logs should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}

---

### OsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination(
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

### OsisPipelineResourcePolicy <a name="OsisPipelineResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineResourcePolicy(
  policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}.

---

### OsisPipelineTags <a name="OsisPipelineTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#key OsisPipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#value OsisPipeline#value}

---

### OsisPipelineVpcEndpoints <a name="OsisPipelineVpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpoints()
```


### OsisPipelineVpcEndpointsVpcOptions <a name="OsisPipelineVpcEndpointsVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsVpcOptions()
```


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions()
```


### OsisPipelineVpcOptions <a name="OsisPipelineVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcOptions(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_attachment_options: OsisPipelineVpcOptionsVpcAttachmentOptions = None,
  vpc_endpoint_management: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | A list of security groups associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of subnet IDs associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions">vpc_attachment_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | Options for attaching a VPC to the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement">vpc_endpoint_management</a></code> | <code>str</code> | Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of security groups associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of subnet IDs associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}

---

##### `vpc_attachment_options`<sup>Optional</sup> <a name="vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions"></a>

```python
vpc_attachment_options: OsisPipelineVpcOptionsVpcAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

Options for attaching a VPC to the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_attachment_options OsisPipeline#vpc_attachment_options}

---

##### `vpc_endpoint_management`<sup>Optional</sup> <a name="vpc_endpoint_management" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement"></a>

```python
vpc_endpoint_management: str
```

- *Type:* str

Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}

---

### OsisPipelineVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions(
  attach_to_vpc: bool | IResolvable = None,
  cidr_block: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc">attach_to_vpc</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the pipeline should be attached to the provided VPC. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock">cidr_block</a></code> | <code>str</code> | The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs). |

---

##### `attach_to_vpc`<sup>Optional</sup> <a name="attach_to_vpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc"></a>

```python
attach_to_vpc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the pipeline should be attached to the provided VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#attach_to_vpc OsisPipeline#attach_to_vpc}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#cidr_block OsisPipeline#cidr_block}

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineBufferOptionsOutputReference <a name="OsisPipelineBufferOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineBufferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled">reset_persistent_buffer_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persistent_buffer_enabled` <a name="reset_persistent_buffer_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled"></a>

```python
def reset_persistent_buffer_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput">persistent_buffer_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">persistent_buffer_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persistent_buffer_enabled_input`<sup>Optional</sup> <a name="persistent_buffer_enabled_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput"></a>

```python
persistent_buffer_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persistent_buffer_enabled`<sup>Required</sup> <a name="persistent_buffer_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```python
persistent_buffer_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineBufferOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---


### OsisPipelineEncryptionAtRestOptionsOutputReference <a name="OsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineEncryptionAtRestOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineLogPublishingOptionsCloudwatchLogDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---


### OsisPipelineLogPublishingOptionsOutputReference <a name="OsisPipelineLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination">put_cloudwatch_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination">reset_cloudwatch_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled">reset_is_logging_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_log_destination` <a name="put_cloudwatch_log_destination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination"></a>

```python
def put_cloudwatch_log_destination(
  log_group: str = None
) -> None
```

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

##### `reset_cloudwatch_log_destination` <a name="reset_cloudwatch_log_destination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination"></a>

```python
def reset_cloudwatch_log_destination() -> None
```

##### `reset_is_logging_enabled` <a name="reset_is_logging_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled"></a>

```python
def reset_is_logging_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">cloudwatch_log_destination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput">cloudwatch_log_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput">is_logging_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">is_logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_destination`<sup>Required</sup> <a name="cloudwatch_log_destination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```python
cloudwatch_log_destination: OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a>

---

##### `cloudwatch_log_destination_input`<sup>Optional</sup> <a name="cloudwatch_log_destination_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput"></a>

```python
cloudwatch_log_destination_input: IResolvable | OsisPipelineLogPublishingOptionsCloudwatchLogDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `is_logging_enabled_input`<sup>Optional</sup> <a name="is_logging_enabled_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput"></a>

```python
is_logging_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_logging_enabled`<sup>Required</sup> <a name="is_logging_enabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```python
is_logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineLogPublishingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---


### OsisPipelineResourcePolicyOutputReference <a name="OsisPipelineResourcePolicyOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---


### OsisPipelineTagsList <a name="OsisPipelineTagsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OsisPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>]

---


### OsisPipelineTagsOutputReference <a name="OsisPipelineTagsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>

---


### OsisPipelineVpcEndpointsList <a name="OsisPipelineVpcEndpointsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsisPipelineVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsisPipelineVpcEndpointsOutputReference <a name="OsisPipelineVpcEndpointsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions"></a>

```python
vpc_options: OsisPipelineVpcEndpointsVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: OsisPipelineVpcEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a>

---


### OsisPipelineVpcEndpointsVpcOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions">vpc_attachment_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement">vpc_endpoint_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_attachment_options`<sup>Required</sup> <a name="vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```python
vpc_attachment_options: OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `vpc_endpoint_management`<sup>Required</sup> <a name="vpc_endpoint_management" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```python
vpc_endpoint_management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OsisPipelineVpcEndpointsVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a>

---


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attach_to_vpc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attach_to_vpc`<sup>Required</sup> <a name="attach_to_vpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```python
attach_to_vpc: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a>

---


### OsisPipelineVpcOptionsOutputReference <a name="OsisPipelineVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions">put_vpc_attachment_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions">reset_vpc_attachment_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement">reset_vpc_endpoint_management</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_attachment_options` <a name="put_vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions"></a>

```python
def put_vpc_attachment_options(
  attach_to_vpc: bool | IResolvable = None,
  cidr_block: str = None
) -> None
```

###### `attach_to_vpc`<sup>Optional</sup> <a name="attach_to_vpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions.parameter.attachToVpc"></a>

- *Type:* bool | cdktn.IResolvable

Whether the pipeline should be attached to the provided VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#attach_to_vpc OsisPipeline#attach_to_vpc}

---

###### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions.parameter.cidrBlock"></a>

- *Type:* str

The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/osis_pipeline#cidr_block OsisPipeline#cidr_block}

---

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_attachment_options` <a name="reset_vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions"></a>

```python
def reset_vpc_attachment_options() -> None
```

##### `reset_vpc_endpoint_management` <a name="reset_vpc_endpoint_management" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement"></a>

```python
def reset_vpc_endpoint_management() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions">vpc_attachment_options</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput">vpc_attachment_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput">vpc_endpoint_management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement">vpc_endpoint_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_attachment_options`<sup>Required</sup> <a name="vpc_attachment_options" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```python
vpc_attachment_options: OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_attachment_options_input`<sup>Optional</sup> <a name="vpc_attachment_options_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput"></a>

```python
vpc_attachment_options_input: IResolvable | OsisPipelineVpcOptionsVpcAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `vpc_endpoint_management_input`<sup>Optional</sup> <a name="vpc_endpoint_management_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput"></a>

```python
vpc_endpoint_management_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_management`<sup>Required</sup> <a name="vpc_endpoint_management" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```python
vpc_endpoint_management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineVpcOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---


### OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import osis_pipeline

osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc">reset_attach_to_vpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attach_to_vpc` <a name="reset_attach_to_vpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc"></a>

```python
def reset_attach_to_vpc() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput">attach_to_vpc_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">attach_to_vpc</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attach_to_vpc_input`<sup>Optional</sup> <a name="attach_to_vpc_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput"></a>

```python
attach_to_vpc_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `attach_to_vpc`<sup>Required</sup> <a name="attach_to_vpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```python
attach_to_vpc: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OsisPipelineVpcOptionsVpcAttachmentOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---



