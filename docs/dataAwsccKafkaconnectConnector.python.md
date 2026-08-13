# `dataAwsccKafkaconnectConnector` Submodule <a name="`dataAwsccKafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKafkaconnectConnector <a name="DataAwsccKafkaconnectConnector" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_connector#id DataAwsccKafkaconnectConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccKafkaconnectConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccKafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration">connector_configuration</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription">connector_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster">kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication">kafka_cluster_client_authentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit">kafka_cluster_encryption_in_transit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion">kafka_connect_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery">log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins">plugins</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn">service_execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration">worker_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity"></a>

```python
capacity: DataAwsccKafkaconnectConnectorCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a>

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `connector_configuration`<sup>Required</sup> <a name="connector_configuration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration"></a>

```python
connector_configuration: StringMap
```

- *Type:* cdktn.StringMap

---

##### `connector_description`<sup>Required</sup> <a name="connector_description" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription"></a>

```python
connector_description: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `kafka_cluster`<sup>Required</sup> <a name="kafka_cluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster"></a>

```python
kafka_cluster: DataAwsccKafkaconnectConnectorKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafka_cluster_client_authentication`<sup>Required</sup> <a name="kafka_cluster_client_authentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```python
kafka_cluster_client_authentication: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafka_cluster_encryption_in_transit`<sup>Required</sup> <a name="kafka_cluster_encryption_in_transit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```python
kafka_cluster_encryption_in_transit: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `kafka_connect_version`<sup>Required</sup> <a name="kafka_connect_version" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion"></a>

```python
kafka_connect_version: str
```

- *Type:* str

---

##### `log_delivery`<sup>Required</sup> <a name="log_delivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery"></a>

```python
log_delivery: DataAwsccKafkaconnectConnectorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins"></a>

```python
plugins: DataAwsccKafkaconnectConnectorPluginsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a>

---

##### `service_execution_role_arn`<sup>Required</sup> <a name="service_execution_role_arn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```python
service_execution_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags"></a>

```python
tags: DataAwsccKafkaconnectConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a>

---

##### `worker_configuration`<sup>Required</sup> <a name="worker_configuration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration"></a>

```python
worker_configuration: DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKafkaconnectConnectorCapacity <a name="DataAwsccKafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity()
```


### DataAwsccKafkaconnectConnectorCapacityAutoScaling <a name="DataAwsccKafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling()
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy()
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy()
```


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity()
```


### DataAwsccKafkaconnectConnectorConfig <a name="DataAwsccKafkaconnectConnectorConfig" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_connector#id DataAwsccKafkaconnectConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKafkaconnectConnectorKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster()
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster()
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc()
```


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication()
```


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit()
```


### DataAwsccKafkaconnectConnectorLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery()
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery()
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs()
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose()
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3()
```


### DataAwsccKafkaconnectConnectorPlugins <a name="DataAwsccKafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins()
```


### DataAwsccKafkaconnectConnectorPluginsCustomPlugin <a name="DataAwsccKafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin()
```


### DataAwsccKafkaconnectConnectorTags <a name="DataAwsccKafkaconnectConnectorTags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags()
```


### DataAwsccKafkaconnectConnectorWorkerConfiguration <a name="DataAwsccKafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">max_autoscaling_task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">max_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">min_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">scale_in_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">scale_out_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_autoscaling_task_count`<sup>Required</sup> <a name="max_autoscaling_task_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```python
max_autoscaling_task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_worker_count`<sup>Required</sup> <a name="max_worker_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```python
max_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mcu_count`<sup>Required</sup> <a name="mcu_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_worker_count`<sup>Required</sup> <a name="min_worker_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```python
min_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in_policy`<sup>Required</sup> <a name="scale_in_policy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```python
scale_in_policy: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `scale_out_policy`<sup>Required</sup> <a name="scale_out_policy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```python
scale_out_policy: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization_percentage`<sup>Required</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpu_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization_percentage`<sup>Required</sup> <a name="cpu_utilization_percentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```python
cpu_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisioned_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```python
auto_scaling: DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `provisioned_capacity`<sup>Required</sup> <a name="provisioned_capacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```python
provisioned_capacity: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a>

---


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mcu_count`<sup>Required</sup> <a name="mcu_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```python
mcu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```python
vpc: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apache_kafka_cluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apache_kafka_cluster`<sup>Required</sup> <a name="apache_kafka_cluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```python
apache_kafka_cluster: DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">worker_log_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_log_delivery`<sup>Required</sup> <a name="worker_log_delivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```python
worker_log_delivery: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```python
firehose: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```python
s3: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">custom_plugin_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_plugin_arn`<sup>Required</sup> <a name="custom_plugin_arn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```python
custom_plugin_arn: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorPluginsCustomPlugin
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a>

---


### DataAwsccKafkaconnectConnectorPluginsList <a name="DataAwsccKafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKafkaconnectConnectorPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKafkaconnectConnectorPluginsOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin">custom_plugin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_plugin`<sup>Required</sup> <a name="custom_plugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```python
custom_plugin: DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorPlugins
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a>

---


### DataAwsccKafkaconnectConnectorTagsList <a name="DataAwsccKafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKafkaconnectConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKafkaconnectConnectorTagsOutputReference <a name="DataAwsccKafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a>

---


### DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference <a name="DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kafkaconnect_connector

dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">worker_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_configuration_arn`<sup>Required</sup> <a name="worker_configuration_arn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```python
worker_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKafkaconnectConnectorWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a>

---



