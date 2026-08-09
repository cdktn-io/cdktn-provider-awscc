# `dataAwsccDocdbelasticCluster` Submodule <a name="`dataAwsccDocdbelasticCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDocdbelasticCluster <a name="DataAwsccDocdbelasticCluster" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/docdbelastic_cluster awscc_docdbelastic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/docdbelastic_cluster#id DataAwsccDocdbelasticCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDocdbelasticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDocdbelasticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDocdbelasticCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDocdbelasticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/docdbelastic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDocdbelasticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.adminUserName">admin_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.adminUserPassword">admin_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterEndpoint">cluster_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardCapacity">shard_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardInstanceCount">shard_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList">DataAwsccDocdbelasticClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `admin_user_name`<sup>Required</sup> <a name="admin_user_name" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.adminUserName"></a>

```python
admin_user_name: str
```

- *Type:* str

---

##### `admin_user_password`<sup>Required</sup> <a name="admin_user_password" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.adminUserPassword"></a>

```python
admin_user_password: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `cluster_endpoint`<sup>Required</sup> <a name="cluster_endpoint" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterEndpoint"></a>

```python
cluster_endpoint: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `shard_capacity`<sup>Required</sup> <a name="shard_capacity" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardCapacity"></a>

```python
shard_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shard_instance_count`<sup>Required</sup> <a name="shard_instance_count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.shardInstanceCount"></a>

```python
shard_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.tags"></a>

```python
tags: DataAwsccDocdbelasticClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList">DataAwsccDocdbelasticClusterTagsList</a>

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDocdbelasticClusterConfig <a name="DataAwsccDocdbelasticClusterConfig" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/docdbelastic_cluster#id DataAwsccDocdbelasticCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDocdbelasticClusterTags <a name="DataAwsccDocdbelasticClusterTags" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDocdbelasticClusterTagsList <a name="DataAwsccDocdbelasticClusterTagsList" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDocdbelasticClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDocdbelasticClusterTagsOutputReference <a name="DataAwsccDocdbelasticClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_docdbelastic_cluster

dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTags">DataAwsccDocdbelasticClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDocdbelasticClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDocdbelasticCluster.DataAwsccDocdbelasticClusterTags">DataAwsccDocdbelasticClusterTags</a>

---



