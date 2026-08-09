# `dataAwsccNimblestudioStudio` Submodule <a name="`dataAwsccNimblestudioStudio` Submodule" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNimblestudioStudio <a name="DataAwsccNimblestudioStudio" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio awscc_nimblestudio_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#id DataAwsccNimblestudioStudio#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNimblestudioStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNimblestudioStudio to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNimblestudioStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNimblestudioStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn">admin_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId">sso_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration">studio_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName">studio_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl">studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn">user_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `admin_role_arn`<sup>Required</sup> <a name="admin_role_arn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.adminRoleArn"></a>

```python
admin_role_arn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `sso_client_id`<sup>Required</sup> <a name="sso_client_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.ssoClientId"></a>

```python
sso_client_id: str
```

- *Type:* str

---

##### `studio_encryption_configuration`<sup>Required</sup> <a name="studio_encryption_configuration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioEncryptionConfiguration"></a>

```python
studio_encryption_configuration: DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference">DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference</a>

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `studio_name`<sup>Required</sup> <a name="studio_name" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioName"></a>

```python
studio_name: str
```

- *Type:* str

---

##### `studio_url`<sup>Required</sup> <a name="studio_url" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.studioUrl"></a>

```python
studio_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `user_role_arn`<sup>Required</sup> <a name="user_role_arn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.userRoleArn"></a>

```python
user_role_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNimblestudioStudioConfig <a name="DataAwsccNimblestudioStudioConfig" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/nimblestudio_studio#id DataAwsccNimblestudioStudio#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNimblestudioStudioStudioEncryptionConfiguration <a name="DataAwsccNimblestudioStudioStudioEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference <a name="DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_nimblestudio_studio

dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNimblestudioStudioStudioEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNimblestudioStudio.DataAwsccNimblestudioStudioStudioEncryptionConfiguration">DataAwsccNimblestudioStudioStudioEncryptionConfiguration</a>

---



