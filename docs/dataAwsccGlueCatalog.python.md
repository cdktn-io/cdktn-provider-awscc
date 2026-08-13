# `dataAwsccGlueCatalog` Submodule <a name="`dataAwsccGlueCatalog` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueCatalog <a name="DataAwsccGlueCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog awscc_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalog(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog#id DataAwsccGlueCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogProperties">catalog_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList">DataAwsccGlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.federatedCatalog">federated_catalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference">DataAwsccGlueCatalogFederatedCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.overwriteChildResourcePermissionsWithDefault">overwrite_child_resource_permissions_with_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList">DataAwsccGlueCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.targetRedshiftCatalog">target_redshift_catalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference">DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.updateTime">update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_full_table_external_data_access`<sup>Required</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `catalog_properties`<sup>Required</sup> <a name="catalog_properties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.catalogProperties"></a>

```python
catalog_properties: DataAwsccGlueCatalogCatalogPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesOutputReference</a>

---

##### `create_database_default_permissions`<sup>Required</sup> <a name="create_database_default_permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: DataAwsccGlueCatalogCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList">DataAwsccGlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.createTime"></a>

```python
create_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `federated_catalog`<sup>Required</sup> <a name="federated_catalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.federatedCatalog"></a>

```python
federated_catalog: DataAwsccGlueCatalogFederatedCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference">DataAwsccGlueCatalogFederatedCatalogOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `overwrite_child_resource_permissions_with_default`<sup>Required</sup> <a name="overwrite_child_resource_permissions_with_default" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```python
overwrite_child_resource_permissions_with_default: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tags"></a>

```python
tags: DataAwsccGlueCatalogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList">DataAwsccGlueCatalogTagsList</a>

---

##### `target_redshift_catalog`<sup>Required</sup> <a name="target_redshift_catalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.targetRedshiftCatalog"></a>

```python
target_redshift_catalog: DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference">DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.updateTime"></a>

```python
update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueCatalogCatalogProperties <a name="DataAwsccGlueCatalogCatalogProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties()
```


### DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties()
```


### DataAwsccGlueCatalogConfig <a name="DataAwsccGlueCatalogConfig" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/glue_catalog#id DataAwsccGlueCatalog#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueCatalogCreateDatabaseDefaultPermissions <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions()
```


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal()
```


### DataAwsccGlueCatalogCreateTableDefaultPermissions <a name="DataAwsccGlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions()
```


### DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal()
```


### DataAwsccGlueCatalogFederatedCatalog <a name="DataAwsccGlueCatalogFederatedCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog()
```


### DataAwsccGlueCatalogTags <a name="DataAwsccGlueCatalogTags" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogTags()
```


### DataAwsccGlueCatalogTargetRedshiftCatalog <a name="DataAwsccGlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">data_lake_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">data_transfer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managed_workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managed_workgroup_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshift_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_full_table_external_data_access`<sup>Required</sup> <a name="allow_full_table_external_data_access" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: str
```

- *Type:* str

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `data_lake_access`<sup>Required</sup> <a name="data_lake_access" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```python
data_lake_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_transfer_role`<sup>Required</sup> <a name="data_transfer_role" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```python
data_transfer_role: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `managed_workgroup_name`<sup>Required</sup> <a name="managed_workgroup_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```python
managed_workgroup_name: str
```

- *Type:* str

---

##### `managed_workgroup_status`<sup>Required</sup> <a name="managed_workgroup_status" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```python
managed_workgroup_status: str
```

- *Type:* str

---

##### `redshift_database_name`<sup>Required</sup> <a name="redshift_database_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```python
redshift_database_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### DataAwsccGlueCatalogCatalogPropertiesOutputReference <a name="DataAwsccGlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.customProperties">custom_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">data_lake_access_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties">DataAwsccGlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_properties`<sup>Required</sup> <a name="custom_properties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```python
custom_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `data_lake_access_properties`<sup>Required</sup> <a name="data_lake_access_properties" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```python
data_lake_access_properties: DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference">DataAwsccGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCatalogProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCatalogProperties">DataAwsccGlueCatalogCatalogProperties</a>

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions">DataAwsccGlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCreateDatabaseDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissions">DataAwsccGlueCatalogCreateDatabaseDefaultPermissions</a>

---


### DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsList <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions">DataAwsccGlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCreateTableDefaultPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissions">DataAwsccGlueCatalogCreateTableDefaultPermissions</a>

---


### DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">data_lake_principal_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_lake_principal_identifier`<sup>Required</sup> <a name="data_lake_principal_identifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```python
data_lake_principal_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsccGlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsccGlueCatalogFederatedCatalogOutputReference <a name="DataAwsccGlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog">DataAwsccGlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogFederatedCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogFederatedCatalog">DataAwsccGlueCatalogFederatedCatalog</a>

---


### DataAwsccGlueCatalogTagsList <a name="DataAwsccGlueCatalogTagsList" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueCatalogTagsOutputReference <a name="DataAwsccGlueCatalogTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags">DataAwsccGlueCatalogTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTags">DataAwsccGlueCatalogTags</a>

---


### DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference <a name="DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_catalog

dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog">DataAwsccGlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_arn`<sup>Required</sup> <a name="catalog_arn" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```python
catalog_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueCatalogTargetRedshiftCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueCatalog.DataAwsccGlueCatalogTargetRedshiftCatalog">DataAwsccGlueCatalogTargetRedshiftCatalog</a>

---



