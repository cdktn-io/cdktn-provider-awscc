# `dataAwsccMediapackagePackagingConfiguration` Submodule <a name="`dataAwsccMediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagePackagingConfiguration <a name="DataAwsccMediapackagePackagingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_configuration#id DataAwsccMediapackagePackagingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediapackagePackagingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage">cmaf_package</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage">dash_package</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage">hls_package</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage">mss_package</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cmaf_package`<sup>Required</sup> <a name="cmaf_package" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage"></a>

```python
cmaf_package: DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `dash_package`<sup>Required</sup> <a name="dash_package" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage"></a>

```python
dash_package: DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `hls_package`<sup>Required</sup> <a name="hls_package" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage"></a>

```python
hls_package: DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `mss_package`<sup>Required</sup> <a name="mss_package" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage"></a>

```python
mss_package: DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `packaging_configuration_id`<sup>Required</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```python
packaging_configuration_id: str
```

- *Type:* str

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags"></a>

```python
tags: DataAwsccMediapackagePackagingConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackage <a name="DataAwsccMediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage()
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption()
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider()
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration()
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests()
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection()
```


### DataAwsccMediapackagePackagingConfigurationConfig <a name="DataAwsccMediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_configuration#id DataAwsccMediapackagePackagingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagePackagingConfigurationDashPackage <a name="DataAwsccMediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage()
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests()
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection()
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption()
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider()
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackage <a name="DataAwsccMediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests()
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection()
```


### DataAwsccMediapackagePackagingConfigurationMssPackage <a name="DataAwsccMediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage()
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption()
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider()
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration()
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests()
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection()
```


### DataAwsccMediapackagePackagingConfigurationTags <a name="DataAwsccMediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">ad_markers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_markers`<sup>Required</sup> <a name="ad_markers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds`<sup>Required</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key`<sup>Required</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">hls_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```python
encryption: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `hls_manifests`<sup>Required</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```python
hls_manifests: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `include_encoder_configuration_in_segments`<sup>Required</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationCmafPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">manifest_layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">min_buffer_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">scte_markers_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_layout`<sup>Required</sup> <a name="manifest_layout" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```python
manifest_layout: str
```

- *Type:* str

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `min_buffer_time_seconds`<sup>Required</sup> <a name="min_buffer_time_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```python
min_buffer_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `scte_markers_source`<sup>Required</sup> <a name="scte_markers_source" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```python
scte_markers_source: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">dash_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">include_encoder_configuration_in_segments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">period_triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">segment_template_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dash_manifests`<sup>Required</sup> <a name="dash_manifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```python
dash_manifests: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```python
encryption: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `include_encoder_configuration_in_segments`<sup>Required</sup> <a name="include_encoder_configuration_in_segments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```python
include_encoder_configuration_in_segments: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `period_triggers`<sup>Required</sup> <a name="period_triggers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```python
period_triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_template_format`<sup>Required</sup> <a name="segment_template_format" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```python
segment_template_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationDashPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">encryption_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constant_initialization_vector`<sup>Required</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

---

##### `encryption_method`<sup>Required</sup> <a name="encryption_method" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```python
encryption_method: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">ad_markers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">include_iframe_only_stream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">program_date_time_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">repeat_ext_x_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_markers`<sup>Required</sup> <a name="ad_markers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```python
ad_markers: str
```

- *Type:* str

---

##### `include_iframe_only_stream`<sup>Required</sup> <a name="include_iframe_only_stream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```python
include_iframe_only_stream: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `program_date_time_interval_seconds`<sup>Required</sup> <a name="program_date_time_interval_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```python
program_date_time_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repeat_ext_x_key`<sup>Required</sup> <a name="repeat_ext_x_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```python
repeat_ext_x_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">hls_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">include_dvb_subtitles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">use_audio_rendition_group</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```python
encryption: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `hls_manifests`<sup>Required</sup> <a name="hls_manifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```python
hls_manifests: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `include_dvb_subtitles`<sup>Required</sup> <a name="include_dvb_subtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```python
include_dvb_subtitles: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_audio_rendition_group`<sup>Required</sup> <a name="use_audio_rendition_group" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```python
use_audio_rendition_group: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationHlsPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">speke_key_provider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `speke_key_provider`<sup>Required</sup> <a name="speke_key_provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```python
speke_key_provider: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">preset_speke20_audio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">preset_speke20_video</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preset_speke20_audio`<sup>Required</sup> <a name="preset_speke20_audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```python
preset_speke20_audio: str
```

- *Type:* str

---

##### `preset_speke20_video`<sup>Required</sup> <a name="preset_speke20_video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```python
preset_speke20_video: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryption_contract_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_contract_configuration`<sup>Required</sup> <a name="encryption_contract_configuration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```python
encryption_contract_configuration: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `system_ids`<sup>Required</sup> <a name="system_ids" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```python
system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">manifest_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">stream_selection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_name`<sup>Required</sup> <a name="manifest_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```python
manifest_name: str
```

- *Type:* str

---

##### `stream_selection`<sup>Required</sup> <a name="stream_selection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```python
stream_selection: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">max_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">min_video_bits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">stream_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_video_bits_per_second`<sup>Required</sup> <a name="max_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```python
max_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_video_bits_per_second`<sup>Required</sup> <a name="min_video_bits_per_second" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```python
min_video_bits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_order`<sup>Required</sup> <a name="stream_order" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```python
stream_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">mss_manifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">segment_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```python
encryption: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `mss_manifests`<sup>Required</sup> <a name="mss_manifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```python
mss_manifests: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `segment_duration_seconds`<sup>Required</sup> <a name="segment_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```python
segment_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationMssPackage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationTagsList <a name="DataAwsccMediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingConfigurationTagsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_configuration

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a>

---



