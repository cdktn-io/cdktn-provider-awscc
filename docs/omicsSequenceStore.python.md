# `omicsSequenceStore` Submodule <a name="`omicsSequenceStore` Submodule" id="@cdktn/provider-awscc.omicsSequenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsSequenceStore <a name="OmicsSequenceStore" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store awscc_omics_sequence_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access_log_location: str = None,
  description: str = None,
  e_tag_algorithm_family: str = None,
  fallback_location: str = None,
  propagated_set_level_tags: typing.List[str] = None,
  s3_access_policy: str = None,
  sse_config: OmicsSequenceStoreSseConfig = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.accessLogLocation">access_log_location</a></code> | <code>str</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.eTagAlgorithmFamily">e_tag_algorithm_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.fallbackLocation">fallback_location</a></code> | <code>str</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.propagatedSetLevelTags">propagated_set_level_tags</a></code> | <code>typing.List[str]</code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.s3AccessPolicy">s3_access_policy</a></code> | <code>str</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.name"></a>

- *Type:* str

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `access_log_location`<sup>Optional</sup> <a name="access_log_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.accessLogLocation"></a>

- *Type:* str

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.description"></a>

- *Type:* str

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `e_tag_algorithm_family`<sup>Optional</sup> <a name="e_tag_algorithm_family" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.eTagAlgorithmFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `fallback_location`<sup>Optional</sup> <a name="fallback_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.fallbackLocation"></a>

- *Type:* str

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `propagated_set_level_tags`<sup>Optional</sup> <a name="propagated_set_level_tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.propagatedSetLevelTags"></a>

- *Type:* typing.List[str]

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `s3_access_policy`<sup>Optional</sup> <a name="s3_access_policy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.s3AccessPolicy"></a>

- *Type:* str

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.sseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig">put_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation">reset_access_log_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily">reset_e_tag_algorithm_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation">reset_fallback_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags">reset_propagated_set_level_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy">reset_s3_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig">reset_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sse_config` <a name="put_sse_config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig"></a>

```python
def put_sse_config(
  key_arn: str = None,
  type: str = None
) -> None
```

###### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.keyArn"></a>

- *Type:* str

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

##### `reset_access_log_location` <a name="reset_access_log_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation"></a>

```python
def reset_access_log_location() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_e_tag_algorithm_family` <a name="reset_e_tag_algorithm_family" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily"></a>

```python
def reset_e_tag_algorithm_family() -> None
```

##### `reset_fallback_location` <a name="reset_fallback_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation"></a>

```python
def reset_fallback_location() -> None
```

##### `reset_propagated_set_level_tags` <a name="reset_propagated_set_level_tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags"></a>

```python
def reset_propagated_set_level_tags() -> None
```

##### `reset_s3_access_policy` <a name="reset_s3_access_policy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy"></a>

```python
def reset_s3_access_policy() -> None
```

##### `reset_sse_config` <a name="reset_sse_config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig"></a>

```python
def reset_sse_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OmicsSequenceStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OmicsSequenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsSequenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn">s3_access_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId">sequence_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput">access_log_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput">e_tag_algorithm_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput">fallback_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput">propagated_set_level_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput">s3_access_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput">sse_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation">access_log_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily">e_tag_algorithm_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation">fallback_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags">propagated_set_level_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy">s3_access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `s3_access_point_arn`<sup>Required</sup> <a name="s3_access_point_arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn"></a>

```python
s3_access_point_arn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `sequence_store_id`<sup>Required</sup> <a name="sequence_store_id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId"></a>

```python
sequence_store_id: str
```

- *Type:* str

---

##### `sse_config`<sup>Required</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig"></a>

```python
sse_config: OmicsSequenceStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_log_location_input`<sup>Optional</sup> <a name="access_log_location_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput"></a>

```python
access_log_location_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `e_tag_algorithm_family_input`<sup>Optional</sup> <a name="e_tag_algorithm_family_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput"></a>

```python
e_tag_algorithm_family_input: str
```

- *Type:* str

---

##### `fallback_location_input`<sup>Optional</sup> <a name="fallback_location_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput"></a>

```python
fallback_location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `propagated_set_level_tags_input`<sup>Optional</sup> <a name="propagated_set_level_tags_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput"></a>

```python
propagated_set_level_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_access_policy_input`<sup>Optional</sup> <a name="s3_access_policy_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput"></a>

```python
s3_access_policy_input: str
```

- *Type:* str

---

##### `sse_config_input`<sup>Optional</sup> <a name="sse_config_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput"></a>

```python
sse_config_input: IResolvable | OmicsSequenceStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `access_log_location`<sup>Required</sup> <a name="access_log_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation"></a>

```python
access_log_location: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `e_tag_algorithm_family`<sup>Required</sup> <a name="e_tag_algorithm_family" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily"></a>

```python
e_tag_algorithm_family: str
```

- *Type:* str

---

##### `fallback_location`<sup>Required</sup> <a name="fallback_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation"></a>

```python
fallback_location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `propagated_set_level_tags`<sup>Required</sup> <a name="propagated_set_level_tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags"></a>

```python
propagated_set_level_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_access_policy`<sup>Required</sup> <a name="s3_access_policy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy"></a>

```python
s3_access_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsSequenceStoreConfig <a name="OmicsSequenceStoreConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access_log_location: str = None,
  description: str = None,
  e_tag_algorithm_family: str = None,
  fallback_location: str = None,
  propagated_set_level_tags: typing.List[str] = None,
  s3_access_policy: str = None,
  sse_config: OmicsSequenceStoreSseConfig = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name">name</a></code> | <code>str</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation">access_log_location</a></code> | <code>str</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description">description</a></code> | <code>str</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily">e_tag_algorithm_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation">fallback_location</a></code> | <code>str</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags">propagated_set_level_tags</a></code> | <code>typing.List[str]</code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy">s3_access_policy</a></code> | <code>str</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `access_log_location`<sup>Optional</sup> <a name="access_log_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation"></a>

```python
access_log_location: str
```

- *Type:* str

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `e_tag_algorithm_family`<sup>Optional</sup> <a name="e_tag_algorithm_family" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily"></a>

```python
e_tag_algorithm_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `fallback_location`<sup>Optional</sup> <a name="fallback_location" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation"></a>

```python
fallback_location: str
```

- *Type:* str

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `propagated_set_level_tags`<sup>Optional</sup> <a name="propagated_set_level_tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags"></a>

```python
propagated_set_level_tags: typing.List[str]
```

- *Type:* typing.List[str]

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `s3_access_policy`<sup>Optional</sup> <a name="s3_access_policy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy"></a>

```python
s3_access_policy: str
```

- *Type:* str

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig"></a>

```python
sse_config: OmicsSequenceStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

### OmicsSequenceStoreSseConfig <a name="OmicsSequenceStoreSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStoreSseConfig(
  key_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn">key_arn</a></code> | <code>str</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}. |

---

##### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsSequenceStoreSseConfigOutputReference <a name="OmicsSequenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_sequence_store

omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn">reset_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_arn` <a name="reset_key_arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn"></a>

```python
def reset_key_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsSequenceStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---



