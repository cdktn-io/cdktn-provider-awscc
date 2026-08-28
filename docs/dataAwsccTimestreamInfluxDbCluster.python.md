# `dataAwsccTimestreamInfluxDbCluster` Submodule <a name="`dataAwsccTimestreamInfluxDbCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamInfluxDbCluster <a name="DataAwsccTimestreamInfluxDbCluster" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/timestream_influx_db_cluster awscc_timestream_influx_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/timestream_influx_db_cluster#id DataAwsccTimestreamInfluxDbCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccTimestreamInfluxDbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccTimestreamInfluxDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/timestream_influx_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamInfluxDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.failoverMode">failover_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.influxAuthParametersSecretArn">influx_auth_parameters_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.influxDbClusterId">influx_db_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.nextMaintenanceTime">next_maintenance_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.readerEndpoint">reader_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList">DataAwsccTimestreamInfluxDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

---

##### `db_parameter_group_identifier`<sup>Required</sup> <a name="db_parameter_group_identifier" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

---

##### `db_storage_type`<sup>Required</sup> <a name="db_storage_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `failover_mode`<sup>Required</sup> <a name="failover_mode" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

---

##### `influx_auth_parameters_secret_arn`<sup>Required</sup> <a name="influx_auth_parameters_secret_arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.influxAuthParametersSecretArn"></a>

```python
influx_auth_parameters_secret_arn: str
```

- *Type:* str

---

##### `influx_db_cluster_id`<sup>Required</sup> <a name="influx_db_cluster_id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.influxDbClusterId"></a>

```python
influx_db_cluster_id: str
```

- *Type:* str

---

##### `log_delivery_configuration`<sup>Required</sup> <a name="log_delivery_configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference</a>

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.maintenanceSchedule"></a>

```python
maintenance_schedule: DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `next_maintenance_time`<sup>Required</sup> <a name="next_maintenance_time" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.nextMaintenanceTime"></a>

```python
next_maintenance_time: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.publiclyAccessible"></a>

```python
publicly_accessible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `reader_endpoint`<sup>Required</sup> <a name="reader_endpoint" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.readerEndpoint"></a>

```python
reader_endpoint: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.tags"></a>

```python
tags: DataAwsccTimestreamInfluxDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList">DataAwsccTimestreamInfluxDbClusterTagsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamInfluxDbClusterConfig <a name="DataAwsccTimestreamInfluxDbClusterConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/timestream_influx_db_cluster#id DataAwsccTimestreamInfluxDbCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration <a name="DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration()
```


### DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration <a name="DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration()
```


### DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule <a name="DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule()
```


### DataAwsccTimestreamInfluxDbClusterTags <a name="DataAwsccTimestreamInfluxDbClusterTags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfiguration</a>

---


### DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbClusterLogDeliveryConfigurationS3Configuration</a>

---


### DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference <a name="DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule">DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule">DataAwsccTimestreamInfluxDbClusterMaintenanceSchedule</a>

---


### DataAwsccTimestreamInfluxDbClusterTagsList <a name="DataAwsccTimestreamInfluxDbClusterTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccTimestreamInfluxDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccTimestreamInfluxDbClusterTagsOutputReference <a name="DataAwsccTimestreamInfluxDbClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_timestream_influx_db_cluster

dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTags">DataAwsccTimestreamInfluxDbClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccTimestreamInfluxDbClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbCluster.DataAwsccTimestreamInfluxDbClusterTags">DataAwsccTimestreamInfluxDbClusterTags</a>

---



