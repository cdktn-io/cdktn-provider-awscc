# `dataAwsccMediaconnectFlowMediaStream` Submodule <a name="`dataAwsccMediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlowMediaStream <a name="DataAwsccMediaconnectFlowMediaStream" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream#id DataAwsccMediaconnectFlowMediaStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectFlowMediaStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate">clock_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt">fmt</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId">media_stream_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType">media_stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat">video_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.attributes"></a>

```python
attributes: DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `clock_rate`<sup>Required</sup> <a name="clock_rate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.clockRate"></a>

```python
clock_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.fmt"></a>

```python
fmt: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_id`<sup>Required</sup> <a name="media_stream_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamId"></a>

```python
media_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `media_stream_type`<sup>Required</sup> <a name="media_stream_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.mediaStreamType"></a>

```python
media_stream_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tags"></a>

```python
tags: DataAwsccMediaconnectFlowMediaStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList">DataAwsccMediaconnectFlowMediaStreamTagsList</a>

---

##### `video_format`<sup>Required</sup> <a name="video_format" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.videoFormat"></a>

```python
video_format: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributes <a name="DataAwsccMediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes()
```


### DataAwsccMediaconnectFlowMediaStreamAttributesFmtp <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp()
```


### DataAwsccMediaconnectFlowMediaStreamConfig <a name="DataAwsccMediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/mediaconnect_flow_media_stream#id DataAwsccMediaconnectFlowMediaStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowMediaStreamTags <a name="DataAwsccMediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">channel_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">exact_framerate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">par</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">scan_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_order`<sup>Required</sup> <a name="channel_order" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```python
channel_order: str
```

- *Type:* str

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```python
colorimetry: str
```

- *Type:* str

---

##### `exact_framerate`<sup>Required</sup> <a name="exact_framerate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```python
exact_framerate: str
```

- *Type:* str

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```python
par: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `scan_mode`<sup>Required</sup> <a name="scan_mode" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```python
scan_mode: str
```

- *Type:* str

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```python
tcs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowMediaStreamAttributesFmtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamAttributesFmtp</a>

---


### DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang">lang</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```python
fmtp: DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```python
lang: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowMediaStreamAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamAttributes">DataAwsccMediaconnectFlowMediaStreamAttributes</a>

---


### DataAwsccMediaconnectFlowMediaStreamTagsList <a name="DataAwsccMediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectFlowMediaStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectFlowMediaStreamTagsOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_flow_media_stream

dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectFlowMediaStreamTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlowMediaStream.DataAwsccMediaconnectFlowMediaStreamTags">DataAwsccMediaconnectFlowMediaStreamTags</a>

---



