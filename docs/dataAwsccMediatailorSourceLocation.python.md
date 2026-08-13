# `dataAwsccMediatailorSourceLocation` Submodule <a name="`dataAwsccMediatailorSourceLocation` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorSourceLocation <a name="DataAwsccMediatailorSourceLocation" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediatailor_source_location awscc_mediatailor_source_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediatailor_source_location#id DataAwsccMediatailorSourceLocation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorSourceLocation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediatailorSourceLocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediatailorSourceLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediatailorSourceLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorSourceLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.accessConfiguration">access_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference">DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration">default_segment_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.httpConfiguration">http_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference">DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.segmentDeliveryConfigurations">segment_delivery_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList">DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList">DataAwsccMediatailorSourceLocationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_configuration`<sup>Required</sup> <a name="access_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.accessConfiguration"></a>

```python
access_configuration: DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference">DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_segment_delivery_configuration`<sup>Required</sup> <a name="default_segment_delivery_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration"></a>

```python
default_segment_delivery_configuration: DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a>

---

##### `http_configuration`<sup>Required</sup> <a name="http_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.httpConfiguration"></a>

```python
http_configuration: DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference">DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference</a>

---

##### `segment_delivery_configurations`<sup>Required</sup> <a name="segment_delivery_configurations" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.segmentDeliveryConfigurations"></a>

```python
segment_delivery_configurations: DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList">DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList</a>

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.tags"></a>

```python
tags: DataAwsccMediatailorSourceLocationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList">DataAwsccMediatailorSourceLocationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorSourceLocationAccessConfiguration <a name="DataAwsccMediatailorSourceLocationAccessConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfiguration()
```


### DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration <a name="DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration()
```


### DataAwsccMediatailorSourceLocationConfig <a name="DataAwsccMediatailorSourceLocationConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediatailor_source_location#id DataAwsccMediatailorSourceLocation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration <a name="DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration()
```


### DataAwsccMediatailorSourceLocationHttpConfiguration <a name="DataAwsccMediatailorSourceLocationHttpConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfiguration()
```


### DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations <a name="DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations()
```


### DataAwsccMediatailorSourceLocationTags <a name="DataAwsccMediatailorSourceLocationTags" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference <a name="DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration">secrets_manager_access_token_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfiguration">DataAwsccMediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `secrets_manager_access_token_configuration`<sup>Required</sup> <a name="secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration"></a>

```python
secrets_manager_access_token_configuration: DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationAccessConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfiguration">DataAwsccMediatailorSourceLocationAccessConfiguration</a>

---


### DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference <a name="DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey">secret_string_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_string_key`<sup>Required</sup> <a name="secret_string_key" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey"></a>

```python
secret_string_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">DataAwsccMediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---


### DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference <a name="DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration">DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration">DataAwsccMediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---


### DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference <a name="DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfiguration">DataAwsccMediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationHttpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationHttpConfiguration">DataAwsccMediatailorSourceLocationHttpConfiguration</a>

---


### DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList <a name="DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference <a name="DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations">DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations">DataAwsccMediatailorSourceLocationSegmentDeliveryConfigurations</a>

---


### DataAwsccMediatailorSourceLocationTagsList <a name="DataAwsccMediatailorSourceLocationTagsList" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorSourceLocationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorSourceLocationTagsOutputReference <a name="DataAwsccMediatailorSourceLocationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_source_location

dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTags">DataAwsccMediatailorSourceLocationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorSourceLocationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorSourceLocation.DataAwsccMediatailorSourceLocationTags">DataAwsccMediatailorSourceLocationTags</a>

---



