# `dataAwsccBcmdataexportsExport` Submodule <a name="`dataAwsccBcmdataexportsExport` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmdataexportsExport <a name="DataAwsccBcmdataexportsExport" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmdataexports_export awscc_bcmdataexports_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmdataexports_export#id DataAwsccBcmdataexportsExport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBcmdataexportsExport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBcmdataexportsExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBcmdataexportsExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBcmdataexportsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmdataexportsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.export">export</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference">DataAwsccBcmdataexportsExportExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.exportArn">export_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList">DataAwsccBcmdataexportsExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.export"></a>

```python
export: DataAwsccBcmdataexportsExportExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference">DataAwsccBcmdataexportsExportExportOutputReference</a>

---

##### `export_arn`<sup>Required</sup> <a name="export_arn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.exportArn"></a>

```python
export_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.tags"></a>

```python
tags: DataAwsccBcmdataexportsExportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList">DataAwsccBcmdataexportsExportTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmdataexportsExportConfig <a name="DataAwsccBcmdataexportsExportConfig" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmdataexports_export#id DataAwsccBcmdataexportsExport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmdataexportsExportExport <a name="DataAwsccBcmdataexportsExportExport" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExport.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExport()
```


### DataAwsccBcmdataexportsExportExportDataQuery <a name="DataAwsccBcmdataexportsExportExportDataQuery" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQuery.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQuery()
```


### DataAwsccBcmdataexportsExportExportDestinationConfigurations <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurations" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurations()
```


### DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination()
```


### DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations()
```


### DataAwsccBcmdataexportsExportExportRefreshCadence <a name="DataAwsccBcmdataexportsExportExportRefreshCadence" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadence.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadence()
```


### DataAwsccBcmdataexportsExportTags <a name="DataAwsccBcmdataexportsExportTags" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmdataexportsExportExportDataQueryOutputReference <a name="DataAwsccBcmdataexportsExportExportDataQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.queryStatement">query_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations">table_configurations</a></code> | <code>cdktn.StringMapMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQuery">DataAwsccBcmdataexportsExportExportDataQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

---

##### `table_configurations`<sup>Required</sup> <a name="table_configurations" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations"></a>

```python
table_configurations: StringMapMap
```

- *Type:* cdktn.StringMapMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExportDataQuery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQuery">DataAwsccBcmdataexportsExportExportDataQuery</a>

---


### DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurations">DataAwsccBcmdataexportsExportExportDestinationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination"></a>

```python
s3_destination: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExportDestinationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurations">DataAwsccBcmdataexportsExportExportDestinationConfigurations</a>

---


### DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner">s3_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations">s3_output_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region">s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_bucket_owner`<sup>Required</sup> <a name="s3_bucket_owner" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner"></a>

```python
s3_bucket_owner: str
```

- *Type:* str

---

##### `s3_output_configurations`<sup>Required</sup> <a name="s3_output_configurations" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations"></a>

```python
s3_output_configurations: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a>

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

---


### DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference <a name="DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite">overwrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite"></a>

```python
overwrite: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">DataAwsccBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

---


### DataAwsccBcmdataexportsExportExportOutputReference <a name="DataAwsccBcmdataexportsExportExportOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.dataQuery">data_query</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference">DataAwsccBcmdataexportsExportExportDataQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.destinationConfigurations">destination_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.exportArn">export_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.refreshCadence">refresh_cadence</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference">DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExport">DataAwsccBcmdataexportsExportExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_query`<sup>Required</sup> <a name="data_query" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.dataQuery"></a>

```python
data_query: DataAwsccBcmdataexportsExportExportDataQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDataQueryOutputReference">DataAwsccBcmdataexportsExportExportDataQueryOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_configurations`<sup>Required</sup> <a name="destination_configurations" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.destinationConfigurations"></a>

```python
destination_configurations: DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference">DataAwsccBcmdataexportsExportExportDestinationConfigurationsOutputReference</a>

---

##### `export_arn`<sup>Required</sup> <a name="export_arn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.exportArn"></a>

```python
export_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_cadence`<sup>Required</sup> <a name="refresh_cadence" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.refreshCadence"></a>

```python
refresh_cadence: DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference">DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExport
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExport">DataAwsccBcmdataexportsExportExport</a>

---


### DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference <a name="DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadence">DataAwsccBcmdataexportsExportExportRefreshCadence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportExportRefreshCadence
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportExportRefreshCadence">DataAwsccBcmdataexportsExportExportRefreshCadence</a>

---


### DataAwsccBcmdataexportsExportTagsList <a name="DataAwsccBcmdataexportsExportTagsList" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBcmdataexportsExportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBcmdataexportsExportTagsOutputReference <a name="DataAwsccBcmdataexportsExportTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmdataexports_export

dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTags">DataAwsccBcmdataexportsExportTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmdataexportsExportTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmdataexportsExport.DataAwsccBcmdataexportsExportTags">DataAwsccBcmdataexportsExportTags</a>

---



