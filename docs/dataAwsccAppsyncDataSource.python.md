# `dataAwsccAppsyncDataSource` Submodule <a name="`dataAwsccAppsyncDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncDataSource <a name="DataAwsccAppsyncDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source awscc_appsync_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#id DataAwsccAppsyncDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppsyncDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppsyncDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppsyncDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig">dynamo_db_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig">elasticsearch_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig">event_bridge_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig">http_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig">metrics_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig">open_search_service_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig">relational_database_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dynamo_db_config`<sup>Required</sup> <a name="dynamo_db_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.dynamoDbConfig"></a>

```python
dynamo_db_config: DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference</a>

---

##### `elasticsearch_config`<sup>Required</sup> <a name="elasticsearch_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.elasticsearchConfig"></a>

```python
elasticsearch_config: DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference">DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference</a>

---

##### `event_bridge_config`<sup>Required</sup> <a name="event_bridge_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.eventBridgeConfig"></a>

```python
event_bridge_config: DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference">DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference</a>

---

##### `http_config`<sup>Required</sup> <a name="http_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.httpConfig"></a>

```python
http_config: DataAwsccAppsyncDataSourceHttpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigOutputReference</a>

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.lambdaConfig"></a>

```python
lambda_config: DataAwsccAppsyncDataSourceLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference">DataAwsccAppsyncDataSourceLambdaConfigOutputReference</a>

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.metricsConfig"></a>

```python
metrics_config: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_search_service_config`<sup>Required</sup> <a name="open_search_service_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.openSearchServiceConfig"></a>

```python
open_search_service_config: DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference">DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference</a>

---

##### `relational_database_config`<sup>Required</sup> <a name="relational_database_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.relationalDatabaseConfig"></a>

```python
relational_database_config: DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference</a>

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncDataSourceConfig <a name="DataAwsccAppsyncDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appsync_data_source#id DataAwsccAppsyncDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncDataSourceDynamoDbConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig()
```


### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig()
```


### DataAwsccAppsyncDataSourceElasticsearchConfig <a name="DataAwsccAppsyncDataSourceElasticsearchConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig()
```


### DataAwsccAppsyncDataSourceEventBridgeConfig <a name="DataAwsccAppsyncDataSourceEventBridgeConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig()
```


### DataAwsccAppsyncDataSourceHttpConfig <a name="DataAwsccAppsyncDataSourceHttpConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig()
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig()
```


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig()
```


### DataAwsccAppsyncDataSourceLambdaConfig <a name="DataAwsccAppsyncDataSourceLambdaConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig()
```


### DataAwsccAppsyncDataSourceOpenSearchServiceConfig <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig()
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig()
```


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl">base_table_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName">delta_sync_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl">delta_sync_table_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_table_ttl`<sup>Required</sup> <a name="base_table_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.baseTableTtl"></a>

```python
base_table_ttl: str
```

- *Type:* str

---

##### `delta_sync_table_name`<sup>Required</sup> <a name="delta_sync_table_name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableName"></a>

```python
delta_sync_table_name: str
```

- *Type:* str

---

##### `delta_sync_table_ttl`<sup>Required</sup> <a name="delta_sync_table_ttl" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.deltaSyncTableTtl"></a>

```python
delta_sync_table_ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfig</a>

---


### DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference <a name="DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig">delta_sync_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials">use_caller_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned">versioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `delta_sync_config`<sup>Required</sup> <a name="delta_sync_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.deltaSyncConfig"></a>

```python
delta_sync_config: DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference">DataAwsccAppsyncDataSourceDynamoDbConfigDeltaSyncConfigOutputReference</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `use_caller_credentials`<sup>Required</sup> <a name="use_caller_credentials" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.useCallerCredentials"></a>

```python
use_caller_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `versioned`<sup>Required</sup> <a name="versioned" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.versioned"></a>

```python
versioned: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceDynamoDbConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceDynamoDbConfig">DataAwsccAppsyncDataSourceDynamoDbConfig</a>

---


### DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference <a name="DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceElasticsearchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceElasticsearchConfig">DataAwsccAppsyncDataSourceElasticsearchConfig</a>

---


### DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference <a name="DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceEventBridgeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceEventBridgeConfig">DataAwsccAppsyncDataSourceEventBridgeConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion">signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName">signing_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_region`<sup>Required</sup> <a name="signing_region" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingRegion"></a>

```python
signing_region: str
```

- *Type:* str

---

##### `signing_service_name`<sup>Required</sup> <a name="signing_service_name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.signingServiceName"></a>

```python
signing_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig">aws_iam_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `aws_iam_config`<sup>Required</sup> <a name="aws_iam_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.awsIamConfig"></a>

```python
aws_iam_config: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfig</a>

---


### DataAwsccAppsyncDataSourceHttpConfigOutputReference <a name="DataAwsccAppsyncDataSourceHttpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference">DataAwsccAppsyncDataSourceHttpConfigAuthorizationConfigOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceHttpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceHttpConfig">DataAwsccAppsyncDataSourceHttpConfig</a>

---


### DataAwsccAppsyncDataSourceLambdaConfigOutputReference <a name="DataAwsccAppsyncDataSourceLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn">lambda_function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_function_arn`<sup>Required</sup> <a name="lambda_function_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.lambdaFunctionArn"></a>

```python
lambda_function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceLambdaConfig">DataAwsccAppsyncDataSourceLambdaConfig</a>

---


### DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference <a name="DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceOpenSearchServiceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceOpenSearchServiceConfig">DataAwsccAppsyncDataSourceOpenSearchServiceConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig">rds_http_endpoint_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType">relational_database_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rds_http_endpoint_config`<sup>Required</sup> <a name="rds_http_endpoint_config" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.rdsHttpEndpointConfig"></a>

```python
rds_http_endpoint_config: DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference</a>

---

##### `relational_database_source_type`<sup>Required</sup> <a name="relational_database_source_type" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.relationalDatabaseSourceType"></a>

```python
relational_database_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceRelationalDatabaseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfig</a>

---


### DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference <a name="DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appsync_data_source

dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn">aws_secret_store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `aws_secret_store_arn`<sup>Required</sup> <a name="aws_secret_store_arn" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.awsSecretStoreArn"></a>

```python
aws_secret_store_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncDataSource.DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig">DataAwsccAppsyncDataSourceRelationalDatabaseConfigRdsHttpEndpointConfig</a>

---



