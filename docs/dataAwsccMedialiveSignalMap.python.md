# `dataAwsccMedialiveSignalMap` Submodule <a name="`dataAwsccMedialiveSignalMap` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveSignalMap <a name="DataAwsccMedialiveSignalMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map awscc_medialive_signal_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMedialiveSignalMap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMedialiveSignalMap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMedialiveSignalMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveSignalMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers">cloudwatch_alarm_template_group_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds">cloudwatch_alarm_template_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn">discovery_entry_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers">event_bridge_rule_template_group_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds">event_bridge_rule_template_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap">failed_media_resource_map</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery">force_rediscovery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt">last_discovered_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment">last_successful_monitor_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap">media_resource_map</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment">monitor_changes_pending_deployment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment">monitor_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId">signal_map_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_alarm_template_group_identifiers`<sup>Required</sup> <a name="cloudwatch_alarm_template_group_identifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```python
cloudwatch_alarm_template_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cloudwatch_alarm_template_group_ids`<sup>Required</sup> <a name="cloudwatch_alarm_template_group_ids" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds"></a>

```python
cloudwatch_alarm_template_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_entry_point_arn`<sup>Required</sup> <a name="discovery_entry_point_arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.discoveryEntryPointArn"></a>

```python
discovery_entry_point_arn: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `event_bridge_rule_template_group_identifiers`<sup>Required</sup> <a name="event_bridge_rule_template_group_identifiers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```python
event_bridge_rule_template_group_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `event_bridge_rule_template_group_ids`<sup>Required</sup> <a name="event_bridge_rule_template_group_ids" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds"></a>

```python
event_bridge_rule_template_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failed_media_resource_map`<sup>Required</sup> <a name="failed_media_resource_map" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.failedMediaResourceMap"></a>

```python
failed_media_resource_map: DataAwsccMedialiveSignalMapFailedMediaResourceMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap">DataAwsccMedialiveSignalMapFailedMediaResourceMapMap</a>

---

##### `force_rediscovery`<sup>Required</sup> <a name="force_rediscovery" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.forceRediscovery"></a>

```python
force_rediscovery: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `last_discovered_at`<sup>Required</sup> <a name="last_discovered_at" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastDiscoveredAt"></a>

```python
last_discovered_at: str
```

- *Type:* str

---

##### `last_successful_monitor_deployment`<sup>Required</sup> <a name="last_successful_monitor_deployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.lastSuccessfulMonitorDeployment"></a>

```python
last_successful_monitor_deployment: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a>

---

##### `media_resource_map`<sup>Required</sup> <a name="media_resource_map" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.mediaResourceMap"></a>

```python
media_resource_map: DataAwsccMedialiveSignalMapMediaResourceMapMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap">DataAwsccMedialiveSignalMapMediaResourceMapMap</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `monitor_changes_pending_deployment`<sup>Required</sup> <a name="monitor_changes_pending_deployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorChangesPendingDeployment"></a>

```python
monitor_changes_pending_deployment: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `monitor_deployment`<sup>Required</sup> <a name="monitor_deployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.monitorDeployment"></a>

```python
monitor_deployment: DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference">DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `signal_map_id`<sup>Required</sup> <a name="signal_map_id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.signalMapId"></a>

```python
signal_map_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveSignalMapConfig <a name="DataAwsccMedialiveSignalMapConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/medialive_signal_map#id DataAwsccMedialiveSignalMap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveSignalMapFailedMediaResourceMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap()
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations()
```


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources()
```


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment()
```


### DataAwsccMedialiveSignalMapMediaResourceMap <a name="DataAwsccMedialiveSignalMapMediaResourceMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap()
```


### DataAwsccMedialiveSignalMapMediaResourceMapDestinations <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations()
```


### DataAwsccMedialiveSignalMapMediaResourceMapSources <a name="DataAwsccMedialiveSignalMapMediaResourceMapSources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources()
```


### DataAwsccMedialiveSignalMapMonitorDeployment <a name="DataAwsccMedialiveSignalMapMonitorDeployment" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations"></a>

```python
destinations: DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapFailedMediaResourceMapDestinationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources"></a>

```python
sources: DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapFailedMediaResourceMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMap">DataAwsccMedialiveSignalMapFailedMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapFailedMediaResourceMapSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapFailedMediaResourceMapSources">DataAwsccMedialiveSignalMapFailedMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri">details_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details_uri`<sup>Required</sup> <a name="details_uri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri"></a>

```python
details_uri: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment">DataAwsccMedialiveSignalMapLastSuccessfulMonitorDeployment</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapMediaResourceMapDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinations">DataAwsccMedialiveSignalMapMediaResourceMapDestinations</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapMap <a name="DataAwsccMedialiveSignalMapMediaResourceMapMap" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccMedialiveSignalMapMediaResourceMapOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapMediaResourceMapOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.destinations"></a>

```python
destinations: DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList">DataAwsccMedialiveSignalMapMediaResourceMapDestinationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.sources"></a>

```python
sources: DataAwsccMedialiveSignalMapMediaResourceMapSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList">DataAwsccMedialiveSignalMapMediaResourceMapSourcesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapMediaResourceMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMap">DataAwsccMedialiveSignalMapMediaResourceMap</a>

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesList <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference <a name="DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapMediaResourceMapSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMediaResourceMapSources">DataAwsccMedialiveSignalMapMediaResourceMapSources</a>

---


### DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference <a name="DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_signal_map

dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri">details_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details_uri`<sup>Required</sup> <a name="details_uri" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri"></a>

```python
details_uri: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMedialiveSignalMapMonitorDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveSignalMap.DataAwsccMedialiveSignalMapMonitorDeployment">DataAwsccMedialiveSignalMapMonitorDeployment</a>

---



