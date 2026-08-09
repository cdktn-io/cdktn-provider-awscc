# `dataAwsccKendraIndex` Submodule <a name="`dataAwsccKendraIndex` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraIndex <a name="DataAwsccKendraIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index awscc_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndex(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndex.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccKendraIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccKendraIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations">document_metadata_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy">user_context_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations">user_token_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits"></a>

```python
capacity_units: DataAwsccKendraIndexCapacityUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `document_metadata_configurations`<sup>Required</sup> <a name="document_metadata_configurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations"></a>

```python
document_metadata_configurations: DataAwsccKendraIndexDocumentMetadataConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a>

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags"></a>

```python
tags: DataAwsccKendraIndexTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a>

---

##### `user_context_policy`<sup>Required</sup> <a name="user_context_policy" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy"></a>

```python
user_context_policy: str
```

- *Type:* str

---

##### `user_token_configurations`<sup>Required</sup> <a name="user_token_configurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations"></a>

```python
user_token_configurations: DataAwsccKendraIndexUserTokenConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraIndexCapacityUnits <a name="DataAwsccKendraIndexCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits()
```


### DataAwsccKendraIndexConfig <a name="DataAwsccKendraIndexConfig" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraIndexDocumentMetadataConfigurations <a name="DataAwsccKendraIndexDocumentMetadataConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations()
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance()
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems()
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearch <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearch" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch()
```


### DataAwsccKendraIndexServerSideEncryptionConfiguration <a name="DataAwsccKendraIndexServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration()
```


### DataAwsccKendraIndexTags <a name="DataAwsccKendraIndexTags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexTags()
```


### DataAwsccKendraIndexUserTokenConfigurations <a name="DataAwsccKendraIndexUserTokenConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations()
```


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration()
```


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraIndexCapacityUnitsOutputReference <a name="DataAwsccKendraIndexCapacityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">query_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storage_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_capacity_units`<sup>Required</sup> <a name="query_capacity_units" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```python
query_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_units`<sup>Required</sup> <a name="storage_capacity_units" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```python
storage_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search">search</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance"></a>

```python
relevance: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search"></a>

```python
search: DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexDocumentMetadataConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness">freshness</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance">importance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder">rank_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems">value_importance_items</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness"></a>

```python
freshness: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance"></a>

```python
importance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rank_order`<sup>Required</sup> <a name="rank_order" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder"></a>

```python
rank_order: str
```

- *Type:* str

---

##### `value_importance_items`<sup>Required</sup> <a name="value_importance_items" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems"></a>

```python
value_importance_items: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable">displayable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable">facetable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable">searchable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable">sortable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable"></a>

```python
displayable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable"></a>

```python
facetable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable"></a>

```python
searchable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable"></a>

```python
sortable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a>

---


### DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsccKendraIndexTagsList <a name="DataAwsccKendraIndexTagsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKendraIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKendraIndexTagsOutputReference <a name="DataAwsccKendraIndexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claim_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">group_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">key_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">user_name_attribute_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_regex`<sup>Required</sup> <a name="claim_regex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```python
claim_regex: str
```

- *Type:* str

---

##### `group_attribute_field`<sup>Required</sup> <a name="group_attribute_field" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```python
group_attribute_field: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_location`<sup>Required</sup> <a name="key_location" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```python
key_location: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name_attribute_field`<sup>Required</sup> <a name="user_name_attribute_field" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```python
user_name_attribute_field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsList <a name="DataAwsccKendraIndexUserTokenConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKendraIndexUserTokenConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendra_index

dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">json_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwt_token_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_token_type_configuration`<sup>Required</sup> <a name="json_token_type_configuration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```python
json_token_type_configuration: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwt_token_type_configuration`<sup>Required</sup> <a name="jwt_token_type_configuration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```python
jwt_token_type_configuration: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a>

---



