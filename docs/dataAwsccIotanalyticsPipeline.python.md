# `dataAwsccIotanalyticsPipeline` Submodule <a name="`dataAwsccIotanalyticsPipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsPipeline <a name="DataAwsccIotanalyticsPipeline" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotanalytics_pipeline awscc_iotanalytics_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotanalytics_pipeline#id DataAwsccIotanalyticsPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotanalyticsPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotanalyticsPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities">pipeline_activities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `pipeline_activities`<sup>Required</sup> <a name="pipeline_activities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities"></a>

```python
pipeline_activities: DataAwsccIotanalyticsPipelinePipelineActivitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags"></a>

```python
tags: DataAwsccIotanalyticsPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsPipelineConfig <a name="DataAwsccIotanalyticsPipelineConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotanalytics_pipeline#id DataAwsccIotanalyticsPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsPipelinePipelineActivities <a name="DataAwsccIotanalyticsPipelinePipelineActivities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannel <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilter <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambda <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesMath <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMath" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes()
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes()
```


### DataAwsccIotanalyticsPipelineTags <a name="DataAwsccIotanalyticsPipelineTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName">lambda_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lambda_name`<sup>Required</sup> <a name="lambda_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName"></a>

```python
lambda_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesList <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math">math</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math"></a>

```python
math: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesMath
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes">add_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel">channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich">device_registry_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich">device_shadow_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math">math</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes">remove_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes">select_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_attributes`<sup>Required</sup> <a name="add_attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes"></a>

```python
add_attributes: DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel"></a>

```python
channel: DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore"></a>

```python
datastore: DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a>

---

##### `device_registry_enrich`<sup>Required</sup> <a name="device_registry_enrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich"></a>

```python
device_registry_enrich: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a>

---

##### `device_shadow_enrich`<sup>Required</sup> <a name="device_shadow_enrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich"></a>

```python
device_shadow_enrich: DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter"></a>

```python
filter: DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda"></a>

```python
lambda: DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a>

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math"></a>

```python
math: DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a>

---

##### `remove_attributes`<sup>Required</sup> <a name="remove_attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes"></a>

```python
remove_attributes: DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a>

---

##### `select_attributes`<sup>Required</sup> <a name="select_attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes"></a>

```python
select_attributes: DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---


### DataAwsccIotanalyticsPipelineTagsList <a name="DataAwsccIotanalyticsPipelineTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsPipelineTagsOutputReference <a name="DataAwsccIotanalyticsPipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_pipeline

dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsPipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a>

---



