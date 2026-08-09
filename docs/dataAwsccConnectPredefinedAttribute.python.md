# `dataAwsccConnectPredefinedAttribute` Submodule <a name="`dataAwsccConnectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectPredefinedAttribute <a name="DataAwsccConnectPredefinedAttribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_predefined_attribute#id DataAwsccConnectPredefinedAttribute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectPredefinedAttribute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.attributeConfiguration">attribute_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference">DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.purposes">purposes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference">DataAwsccConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attribute_configuration`<sup>Required</sup> <a name="attribute_configuration" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.attributeConfiguration"></a>

```python
attribute_configuration: DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference">DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purposes`<sup>Required</sup> <a name="purposes" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.purposes"></a>

```python
purposes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.values"></a>

```python
values: DataAwsccConnectPredefinedAttributeValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference">DataAwsccConnectPredefinedAttributeValuesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectPredefinedAttributeAttributeConfiguration <a name="DataAwsccConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfiguration()
```


### DataAwsccConnectPredefinedAttributeConfig <a name="DataAwsccConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_predefined_attribute#id DataAwsccConnectPredefinedAttribute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectPredefinedAttributeValues <a name="DataAwsccConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValues()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">enable_value_validation_on_association</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">is_read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfiguration">DataAwsccConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_value_validation_on_association`<sup>Required</sup> <a name="enable_value_validation_on_association" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```python
enable_value_validation_on_association: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```python
is_read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectPredefinedAttributeAttributeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeAttributeConfiguration">DataAwsccConnectPredefinedAttributeAttributeConfiguration</a>

---


### DataAwsccConnectPredefinedAttributeValuesOutputReference <a name="DataAwsccConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_predefined_attribute

dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.stringList">string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValues">DataAwsccConnectPredefinedAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_list`<sup>Required</sup> <a name="string_list" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```python
string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectPredefinedAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectPredefinedAttribute.DataAwsccConnectPredefinedAttributeValues">DataAwsccConnectPredefinedAttributeValues</a>

---



