# `dataAwsccMpaIdentitySource` Submodule <a name="`dataAwsccMpaIdentitySource` Submodule" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMpaIdentitySource <a name="DataAwsccMpaIdentitySource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mpa_identity_source awscc_mpa_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mpa_identity_source#id DataAwsccMpaIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMpaIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMpaIdentitySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMpaIdentitySource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMpaIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mpa_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMpaIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceArn">identity_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceParameters">identity_source_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceType">identity_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList">DataAwsccMpaIdentitySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `identity_source_arn`<sup>Required</sup> <a name="identity_source_arn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceArn"></a>

```python
identity_source_arn: str
```

- *Type:* str

---

##### `identity_source_parameters`<sup>Required</sup> <a name="identity_source_parameters" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceParameters"></a>

```python
identity_source_parameters: DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference</a>

---

##### `identity_source_type`<sup>Required</sup> <a name="identity_source_type" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.identitySourceType"></a>

```python
identity_source_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tags"></a>

```python
tags: DataAwsccMpaIdentitySourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList">DataAwsccMpaIdentitySourceTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMpaIdentitySourceConfig <a name="DataAwsccMpaIdentitySourceConfig" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mpa_identity_source#id DataAwsccMpaIdentitySource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMpaIdentitySourceIdentitySourceParameters <a name="DataAwsccMpaIdentitySourceIdentitySourceParameters" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters()
```


### DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter()
```


### DataAwsccMpaIdentitySourceTags <a name="DataAwsccMpaIdentitySourceTags" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl">approval_portal_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_portal_url`<sup>Required</sup> <a name="approval_portal_url" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl"></a>

```python
approval_portal_url: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


### DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference <a name="DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter">iam_identity_center</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters">DataAwsccMpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_identity_center`<sup>Required</sup> <a name="iam_identity_center" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter"></a>

```python
iam_identity_center: DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">DataAwsccMpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMpaIdentitySourceIdentitySourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceIdentitySourceParameters">DataAwsccMpaIdentitySourceIdentitySourceParameters</a>

---


### DataAwsccMpaIdentitySourceTagsList <a name="DataAwsccMpaIdentitySourceTagsList" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMpaIdentitySourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMpaIdentitySourceTagsOutputReference <a name="DataAwsccMpaIdentitySourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mpa_identity_source

dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags">DataAwsccMpaIdentitySourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMpaIdentitySourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMpaIdentitySource.DataAwsccMpaIdentitySourceTags">DataAwsccMpaIdentitySourceTags</a>

---



