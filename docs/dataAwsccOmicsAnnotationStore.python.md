# `dataAwsccOmicsAnnotationStore` Submodule <a name="`dataAwsccOmicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOmicsAnnotationStore <a name="DataAwsccOmicsAnnotationStore" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store#id DataAwsccOmicsAnnotationStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOmicsAnnotationStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.annotationStoreId">annotation_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference">DataAwsccOmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference">DataAwsccOmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeArn">store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeFormat">store_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeSizeBytes">store_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `annotation_store_id`<sup>Required</sup> <a name="annotation_store_id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.annotationStoreId"></a>

```python
annotation_store_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.reference"></a>

```python
reference: DataAwsccOmicsAnnotationStoreReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference">DataAwsccOmicsAnnotationStoreReferenceOutputReference</a>

---

##### `sse_config`<sup>Required</sup> <a name="sse_config" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.sseConfig"></a>

```python
sse_config: DataAwsccOmicsAnnotationStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference">DataAwsccOmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `store_arn`<sup>Required</sup> <a name="store_arn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeArn"></a>

```python
store_arn: str
```

- *Type:* str

---

##### `store_format`<sup>Required</sup> <a name="store_format" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeFormat"></a>

```python
store_format: str
```

- *Type:* str

---

##### `store_options`<sup>Required</sup> <a name="store_options" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeOptions"></a>

```python
store_options: DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `store_size_bytes`<sup>Required</sup> <a name="store_size_bytes" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeSizeBytes"></a>

```python
store_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOmicsAnnotationStoreConfig <a name="DataAwsccOmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store#id DataAwsccOmicsAnnotationStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOmicsAnnotationStoreReference <a name="DataAwsccOmicsAnnotationStoreReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference()
```


### DataAwsccOmicsAnnotationStoreSseConfig <a name="DataAwsccOmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig()
```


### DataAwsccOmicsAnnotationStoreStoreOptions <a name="DataAwsccOmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions()
```


### DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOmicsAnnotationStoreReferenceOutputReference <a name="DataAwsccOmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference">DataAwsccOmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOmicsAnnotationStoreReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference">DataAwsccOmicsAnnotationStoreReference</a>

---


### DataAwsccOmicsAnnotationStoreSseConfigOutputReference <a name="DataAwsccOmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig">DataAwsccOmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOmicsAnnotationStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig">DataAwsccOmicsAnnotationStoreSseConfig</a>

---


### DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference <a name="DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">tsv_store_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tsv_store_options`<sup>Required</sup> <a name="tsv_store_options" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```python
tsv_store_options: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOmicsAnnotationStoreStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptions</a>

---


### DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_omics_annotation_store

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">annotation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">format_to_header</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">schema</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_type`<sup>Required</sup> <a name="annotation_type" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```python
annotation_type: str
```

- *Type:* str

---

##### `format_to_header`<sup>Required</sup> <a name="format_to_header" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```python
format_to_header: StringMap
```

- *Type:* cdktn.StringMap

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```python
schema: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



