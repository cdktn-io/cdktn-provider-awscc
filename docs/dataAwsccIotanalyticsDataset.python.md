# `dataAwsccIotanalyticsDataset` Submodule <a name="`dataAwsccIotanalyticsDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsDataset <a name="DataAwsccIotanalyticsDataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_dataset awscc_iotanalytics_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_dataset#id DataAwsccIotanalyticsDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsDataset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotanalyticsDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotanalyticsDataset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotanalyticsDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList">DataAwsccIotanalyticsDatasetActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.contentDeliveryRules">content_delivery_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList">DataAwsccIotanalyticsDatasetContentDeliveryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lateDataRules">late_data_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList">DataAwsccIotanalyticsDatasetLateDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference">DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList">DataAwsccIotanalyticsDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.triggers">triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList">DataAwsccIotanalyticsDatasetTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.versioningConfiguration">versioning_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference">DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.actions"></a>

```python
actions: DataAwsccIotanalyticsDatasetActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList">DataAwsccIotanalyticsDatasetActionsList</a>

---

##### `content_delivery_rules`<sup>Required</sup> <a name="content_delivery_rules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.contentDeliveryRules"></a>

```python
content_delivery_rules: DataAwsccIotanalyticsDatasetContentDeliveryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList">DataAwsccIotanalyticsDatasetContentDeliveryRulesList</a>

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `late_data_rules`<sup>Required</sup> <a name="late_data_rules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lateDataRules"></a>

```python
late_data_rules: DataAwsccIotanalyticsDatasetLateDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList">DataAwsccIotanalyticsDatasetLateDataRulesList</a>

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.retentionPeriod"></a>

```python
retention_period: DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference">DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tags"></a>

```python
tags: DataAwsccIotanalyticsDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList">DataAwsccIotanalyticsDatasetTagsList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.triggers"></a>

```python
triggers: DataAwsccIotanalyticsDatasetTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList">DataAwsccIotanalyticsDatasetTriggersList</a>

---

##### `versioning_configuration`<sup>Required</sup> <a name="versioning_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.versioningConfiguration"></a>

```python
versioning_configuration: DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference">DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsDatasetActions <a name="DataAwsccIotanalyticsDatasetActions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions()
```


### DataAwsccIotanalyticsDatasetActionsContainerAction <a name="DataAwsccIotanalyticsDatasetActionsContainerAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction()
```


### DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration <a name="DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration()
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariables <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariables" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables()
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue()
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue()
```


### DataAwsccIotanalyticsDatasetActionsQueryAction <a name="DataAwsccIotanalyticsDatasetActionsQueryAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction()
```


### DataAwsccIotanalyticsDatasetActionsQueryActionFilters <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFilters" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters()
```


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime()
```


### DataAwsccIotanalyticsDatasetConfig <a name="DataAwsccIotanalyticsDatasetConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotanalytics_dataset#id DataAwsccIotanalyticsDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsDatasetContentDeliveryRules <a name="DataAwsccIotanalyticsDatasetContentDeliveryRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules()
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination()
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration()
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration()
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration()
```


### DataAwsccIotanalyticsDatasetLateDataRules <a name="DataAwsccIotanalyticsDatasetLateDataRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules()
```


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration()
```


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration()
```


### DataAwsccIotanalyticsDatasetRetentionPeriod <a name="DataAwsccIotanalyticsDatasetRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod()
```


### DataAwsccIotanalyticsDatasetTags <a name="DataAwsccIotanalyticsDatasetTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags()
```


### DataAwsccIotanalyticsDatasetTriggers <a name="DataAwsccIotanalyticsDatasetTriggers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers()
```


### DataAwsccIotanalyticsDatasetTriggersSchedule <a name="DataAwsccIotanalyticsDatasetTriggersSchedule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule()
```


### DataAwsccIotanalyticsDatasetTriggersTriggeringDataset <a name="DataAwsccIotanalyticsDatasetTriggersTriggeringDataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset()
```


### DataAwsccIotanalyticsDatasetVersioningConfiguration <a name="DataAwsccIotanalyticsDatasetVersioningConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.variables">variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction">DataAwsccIotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `resource_configuration`<sup>Required</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration"></a>

```python
resource_configuration: DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.variables"></a>

```python
variables: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsContainerAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction">DataAwsccIotanalyticsDatasetActionsContainerAction</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue">dataset_content_version_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue">output_file_uri_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables">DataAwsccIotanalyticsDatasetActionsContainerActionVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_content_version_value`<sup>Required</sup> <a name="dataset_content_version_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue"></a>

```python
dataset_content_version_value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a>

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_file_uri_value`<sup>Required</sup> <a name="output_file_uri_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue"></a>

```python
output_file_uri_value: DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a>

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsContainerActionVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables">DataAwsccIotanalyticsDatasetActionsContainerActionVariables</a>

---


### DataAwsccIotanalyticsDatasetActionsList <a name="DataAwsccIotanalyticsDatasetActionsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetActionsOutputReference <a name="DataAwsccIotanalyticsDatasetActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.containerAction">container_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.queryAction">query_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions">DataAwsccIotanalyticsDatasetActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `container_action`<sup>Required</sup> <a name="container_action" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.containerAction"></a>

```python
container_action: DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference</a>

---

##### `query_action`<sup>Required</sup> <a name="query_action" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.queryAction"></a>

```python
query_action: DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions">DataAwsccIotanalyticsDatasetActions</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression">time_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offset_seconds`<sup>Required</sup> <a name="offset_seconds" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_expression`<sup>Required</sup> <a name="time_expression" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression"></a>

```python
time_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime">delta_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters">DataAwsccIotanalyticsDatasetActionsQueryActionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_time`<sup>Required</sup> <a name="delta_time" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime"></a>

```python
delta_time: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsQueryActionFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters">DataAwsccIotanalyticsDatasetActionsQueryActionFilters</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery">sql_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction">DataAwsccIotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.filters"></a>

```python
filters: DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList</a>

---

##### `sql_query`<sup>Required</sup> <a name="sql_query" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetActionsQueryAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction">DataAwsccIotanalyticsDatasetActionsQueryAction</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName">input_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_name`<sup>Required</sup> <a name="input_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName"></a>

```python
input_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration">iot_events_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration">s3_destination_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iot_events_destination_configuration`<sup>Required</sup> <a name="iot_events_destination_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration"></a>

```python
iot_events_destination_configuration: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a>

---

##### `s3_destination_configuration`<sup>Required</sup> <a name="s3_destination_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration"></a>

```python
s3_destination_configuration: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration">glue_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `glue_configuration`<sup>Required</sup> <a name="glue_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration"></a>

```python
glue_configuration: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesList <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName">entry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules">DataAwsccIotanalyticsDatasetContentDeliveryRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination"></a>

```python
destination: DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a>

---

##### `entry_name`<sup>Required</sup> <a name="entry_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName"></a>

```python
entry_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetContentDeliveryRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules">DataAwsccIotanalyticsDatasetContentDeliveryRules</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesList <a name="DataAwsccIotanalyticsDatasetLateDataRulesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetLateDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetLateDataRulesOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration">rule_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules">DataAwsccIotanalyticsDatasetLateDataRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_configuration`<sup>Required</sup> <a name="rule_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration"></a>

```python
rule_configuration: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a>

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetLateDataRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules">DataAwsccIotanalyticsDatasetLateDataRules</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration">delta_time_session_window_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_time_session_window_configuration`<sup>Required</sup> <a name="delta_time_session_window_configuration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration"></a>

```python
delta_time_session_window_configuration: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---


### DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference <a name="DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays">number_of_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod">DataAwsccIotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_days`<sup>Required</sup> <a name="number_of_days" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays"></a>

```python
number_of_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited"></a>

```python
unlimited: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod">DataAwsccIotanalyticsDatasetRetentionPeriod</a>

---


### DataAwsccIotanalyticsDatasetTagsList <a name="DataAwsccIotanalyticsDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetTagsOutputReference <a name="DataAwsccIotanalyticsDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags">DataAwsccIotanalyticsDatasetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags">DataAwsccIotanalyticsDatasetTags</a>

---


### DataAwsccIotanalyticsDatasetTriggersList <a name="DataAwsccIotanalyticsDatasetTriggersList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotanalyticsDatasetTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotanalyticsDatasetTriggersOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference">DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.triggeringDataset">triggering_dataset</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference">DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers">DataAwsccIotanalyticsDatasetTriggers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.schedule"></a>

```python
schedule: DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference">DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference</a>

---

##### `triggering_dataset`<sup>Required</sup> <a name="triggering_dataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.triggeringDataset"></a>

```python
triggering_dataset: DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference">DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetTriggers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers">DataAwsccIotanalyticsDatasetTriggers</a>

---


### DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule">DataAwsccIotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetTriggersSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule">DataAwsccIotanalyticsDatasetTriggersSchedule</a>

---


### DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName">dataset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset">DataAwsccIotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_name`<sup>Required</sup> <a name="dataset_name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName"></a>

```python
dataset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetTriggersTriggeringDataset
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset">DataAwsccIotanalyticsDatasetTriggersTriggeringDataset</a>

---


### DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotanalytics_dataset

dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited">unlimited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration">DataAwsccIotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_versions`<sup>Required</sup> <a name="max_versions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited"></a>

```python
unlimited: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotanalyticsDatasetVersioningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration">DataAwsccIotanalyticsDatasetVersioningConfiguration</a>

---



