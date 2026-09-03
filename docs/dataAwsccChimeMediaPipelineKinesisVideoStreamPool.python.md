# `dataAwsccChimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`dataAwsccChimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPool <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool#id DataAwsccChimeMediaPipelineKinesisVideoStreamPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">pool_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">stream_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `pool_status`<sup>Required</sup> <a name="pool_status" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```python
pool_status: str
```

- *Type:* str

---

##### `stream_configuration`<sup>Required</sup> <a name="stream_configuration" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```python
stream_configuration: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```python
tags: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pool#id DataAwsccChimeMediaPipelineKinesisVideoStreamPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration()
```


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">data_retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_retention_in_hours`<sup>Required</sup> <a name="data_retention_in_hours" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```python
data_retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_media_pipeline_kinesis_video_stream_pool

dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPool.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolTags</a>

---



