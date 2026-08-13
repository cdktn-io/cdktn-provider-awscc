# `sagemakerArtifact` Submodule <a name="`sagemakerArtifact` Submodule" id="@cdktn/provider-awscc.sagemakerArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerArtifact <a name="SagemakerArtifact" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact awscc_sagemaker_artifact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifact(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_type: str,
  source: SagemakerArtifactSource,
  artifact_name: str = None,
  metadata_properties: SagemakerArtifactMetadataProperties = None,
  properties: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[SagemakerArtifactTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.artifactType">artifact_type</a></code> | <code>str</code> | The artifact type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a></code> | The source of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.artifactName">artifact_name</a></code> | <code>str</code> | The name of the artifact. Must be unique to your account in an AWS Region. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A list of properties to add to the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]</code> | A list of tags to apply to the artifact. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_type`<sup>Required</sup> <a name="artifact_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.artifactType"></a>

- *Type:* str

The artifact type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#artifact_type SagemakerArtifact#artifact_type}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a>

The source of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source SagemakerArtifact#source}

---

##### `artifact_name`<sup>Optional</sup> <a name="artifact_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.artifactName"></a>

- *Type:* str

The name of the artifact. Must be unique to your account in an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#artifact_name SagemakerArtifact#artifact_name}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.metadataProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#metadata_properties SagemakerArtifact#metadata_properties}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A list of properties to add to the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#properties SagemakerArtifact#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]

A list of tags to apply to the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#tags SagemakerArtifact#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties">put_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetArtifactName">reset_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetMetadataProperties">reset_metadata_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata_properties` <a name="put_metadata_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties"></a>

```python
def put_metadata_properties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
) -> None
```

###### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties.parameter.commitId"></a>

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#commit_id SagemakerArtifact#commit_id}

---

###### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties.parameter.generatedBy"></a>

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#generated_by SagemakerArtifact#generated_by}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties.parameter.projectId"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#project_id SagemakerArtifact#project_id}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putMetadataProperties.parameter.repository"></a>

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#repository SagemakerArtifact#repository}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putSource"></a>

```python
def put_source(
  source_uri: str,
  source_types: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes] = None
) -> None
```

###### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putSource.parameter.sourceUri"></a>

- *Type:* str

The URI of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source_uri SagemakerArtifact#source_uri}

---

###### `source_types`<sup>Optional</sup> <a name="source_types" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putSource.parameter.sourceTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]

A list of source types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source_types SagemakerArtifact#source_types}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerArtifactTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]

---

##### `reset_artifact_name` <a name="reset_artifact_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetArtifactName"></a>

```python
def reset_artifact_name() -> None
```

##### `reset_metadata_properties` <a name="reset_metadata_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetMetadataProperties"></a>

```python
def reset_metadata_properties() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerArtifact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerArtifact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerArtifact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference">SagemakerArtifactMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference">SagemakerArtifactSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList">SagemakerArtifactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactNameInput">artifact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactTypeInput">artifact_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.metadataPropertiesInput">metadata_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactName">artifact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactType">artifact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `metadata_properties`<sup>Required</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.metadataProperties"></a>

```python
metadata_properties: SagemakerArtifactMetadataPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference">SagemakerArtifactMetadataPropertiesOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.source"></a>

```python
source: SagemakerArtifactSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference">SagemakerArtifactSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tags"></a>

```python
tags: SagemakerArtifactTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList">SagemakerArtifactTagsList</a>

---

##### `artifact_name_input`<sup>Optional</sup> <a name="artifact_name_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactNameInput"></a>

```python
artifact_name_input: str
```

- *Type:* str

---

##### `artifact_type_input`<sup>Optional</sup> <a name="artifact_type_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactTypeInput"></a>

```python
artifact_type_input: str
```

- *Type:* str

---

##### `metadata_properties_input`<sup>Optional</sup> <a name="metadata_properties_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.metadataPropertiesInput"></a>

```python
metadata_properties_input: IResolvable | SagemakerArtifactMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.sourceInput"></a>

```python
source_input: IResolvable | SagemakerArtifactSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerArtifactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]

---

##### `artifact_name`<sup>Required</sup> <a name="artifact_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

---

##### `artifact_type`<sup>Required</sup> <a name="artifact_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.artifactType"></a>

```python
artifact_type: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerArtifactConfig <a name="SagemakerArtifactConfig" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  artifact_type: str,
  source: SagemakerArtifactSource,
  artifact_name: str = None,
  metadata_properties: SagemakerArtifactMetadataProperties = None,
  properties: typing.Mapping[str] = None,
  tags: IResolvable | typing.List[SagemakerArtifactTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.artifactType">artifact_type</a></code> | <code>str</code> | The artifact type. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a></code> | The source of the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.artifactName">artifact_name</a></code> | <code>str</code> | The name of the artifact. Must be unique to your account in an AWS Region. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.metadataProperties">metadata_properties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a></code> | Metadata properties of the tracking entity, trial, or trial component. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A list of properties to add to the artifact. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]</code> | A list of tags to apply to the artifact. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `artifact_type`<sup>Required</sup> <a name="artifact_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.artifactType"></a>

```python
artifact_type: str
```

- *Type:* str

The artifact type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#artifact_type SagemakerArtifact#artifact_type}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.source"></a>

```python
source: SagemakerArtifactSource
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a>

The source of the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source SagemakerArtifact#source}

---

##### `artifact_name`<sup>Optional</sup> <a name="artifact_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

The name of the artifact. Must be unique to your account in an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#artifact_name SagemakerArtifact#artifact_name}

---

##### `metadata_properties`<sup>Optional</sup> <a name="metadata_properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.metadataProperties"></a>

```python
metadata_properties: SagemakerArtifactMetadataProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a>

Metadata properties of the tracking entity, trial, or trial component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#metadata_properties SagemakerArtifact#metadata_properties}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of properties to add to the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#properties SagemakerArtifact#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerArtifactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]

A list of tags to apply to the artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#tags SagemakerArtifact#tags}

---

### SagemakerArtifactMetadataProperties <a name="SagemakerArtifactMetadataProperties" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactMetadataProperties(
  commit_id: str = None,
  generated_by: str = None,
  project_id: str = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.commitId">commit_id</a></code> | <code>str</code> | The commit ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.generatedBy">generated_by</a></code> | <code>str</code> | The entity this entity was generated by. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.projectId">project_id</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.repository">repository</a></code> | <code>str</code> | The repository. |

---

##### `commit_id`<sup>Optional</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

The commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#commit_id SagemakerArtifact#commit_id}

---

##### `generated_by`<sup>Optional</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

The entity this entity was generated by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#generated_by SagemakerArtifact#generated_by}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#project_id SagemakerArtifact#project_id}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties.property.repository"></a>

```python
repository: str
```

- *Type:* str

The repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#repository SagemakerArtifact#repository}

---

### SagemakerArtifactSource <a name="SagemakerArtifactSource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactSource(
  source_uri: str,
  source_types: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource.property.sourceUri">source_uri</a></code> | <code>str</code> | The URI of the source. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource.property.sourceTypes">source_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]</code> | A list of source types. |

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

The URI of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source_uri SagemakerArtifact#source_uri}

---

##### `source_types`<sup>Optional</sup> <a name="source_types" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource.property.sourceTypes"></a>

```python
source_types: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]

A list of source types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source_types SagemakerArtifact#source_types}

---

### SagemakerArtifactSourceSourceTypes <a name="SagemakerArtifactSourceSourceTypes" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactSourceSourceTypes(
  source_id_type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes.property.sourceIdType">source_id_type</a></code> | <code>str</code> | The type of ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes.property.value">value</a></code> | <code>str</code> | The ID. |

---

##### `source_id_type`<sup>Optional</sup> <a name="source_id_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes.property.sourceIdType"></a>

```python
source_id_type: str
```

- *Type:* str

The type of ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#source_id_type SagemakerArtifact#source_id_type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes.property.value"></a>

```python
value: str
```

- *Type:* str

The ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#value SagemakerArtifact#value}

---

### SagemakerArtifactTags <a name="SagemakerArtifactTags" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#key SagemakerArtifact#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_artifact#value SagemakerArtifact#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerArtifactMetadataPropertiesOutputReference <a name="SagemakerArtifactMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetCommitId">reset_commit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetGeneratedBy">reset_generated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_commit_id` <a name="reset_commit_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetCommitId"></a>

```python
def reset_commit_id() -> None
```

##### `reset_generated_by` <a name="reset_generated_by" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetGeneratedBy"></a>

```python
def reset_generated_by() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.commitIdInput">commit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.generatedByInput">generated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.commitId">commit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.generatedBy">generated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commit_id_input`<sup>Optional</sup> <a name="commit_id_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.commitIdInput"></a>

```python
commit_id_input: str
```

- *Type:* str

---

##### `generated_by_input`<sup>Optional</sup> <a name="generated_by_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.generatedByInput"></a>

```python
generated_by_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `commit_id`<sup>Required</sup> <a name="commit_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.commitId"></a>

```python
commit_id: str
```

- *Type:* str

---

##### `generated_by`<sup>Required</sup> <a name="generated_by" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.generatedBy"></a>

```python
generated_by: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerArtifactMetadataProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactMetadataProperties">SagemakerArtifactMetadataProperties</a>

---


### SagemakerArtifactSourceOutputReference <a name="SagemakerArtifactSourceOutputReference" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.putSourceTypes">put_source_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.resetSourceTypes">reset_source_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_types` <a name="put_source_types" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.putSourceTypes"></a>

```python
def put_source_types(
  value: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.putSourceTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]

---

##### `reset_source_types` <a name="reset_source_types" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.resetSourceTypes"></a>

```python
def reset_source_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceTypes">source_types</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList">SagemakerArtifactSourceSourceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceTypesInput">source_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceUriInput">source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceUri">source_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_types`<sup>Required</sup> <a name="source_types" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceTypes"></a>

```python
source_types: SagemakerArtifactSourceSourceTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList">SagemakerArtifactSourceSourceTypesList</a>

---

##### `source_types_input`<sup>Optional</sup> <a name="source_types_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceTypesInput"></a>

```python
source_types_input: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]

---

##### `source_uri_input`<sup>Optional</sup> <a name="source_uri_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceUriInput"></a>

```python
source_uri_input: str
```

- *Type:* str

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerArtifactSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSource">SagemakerArtifactSource</a>

---


### SagemakerArtifactSourceSourceTypesList <a name="SagemakerArtifactSourceSourceTypesList" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactSourceSourceTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerArtifactSourceSourceTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerArtifactSourceSourceTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>]

---


### SagemakerArtifactSourceSourceTypesOutputReference <a name="SagemakerArtifactSourceSourceTypesOutputReference" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resetSourceIdType">reset_source_id_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_id_type` <a name="reset_source_id_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resetSourceIdType"></a>

```python
def reset_source_id_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.sourceIdTypeInput">source_id_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.sourceIdType">source_id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_id_type_input`<sup>Optional</sup> <a name="source_id_type_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.sourceIdTypeInput"></a>

```python
source_id_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `source_id_type`<sup>Required</sup> <a name="source_id_type" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.sourceIdType"></a>

```python
source_id_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerArtifactSourceSourceTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactSourceSourceTypes">SagemakerArtifactSourceSourceTypes</a>

---


### SagemakerArtifactTagsList <a name="SagemakerArtifactTagsList" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerArtifactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerArtifactTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>]

---


### SagemakerArtifactTagsOutputReference <a name="SagemakerArtifactTagsOutputReference" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_artifact

sagemakerArtifact.SagemakerArtifactTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerArtifactTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerArtifact.SagemakerArtifactTags">SagemakerArtifactTags</a>

---



