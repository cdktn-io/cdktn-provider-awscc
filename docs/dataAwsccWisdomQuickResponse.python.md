# `dataAwsccWisdomQuickResponse` Submodule <a name="`dataAwsccWisdomQuickResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWisdomQuickResponse <a name="DataAwsccWisdomQuickResponse" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_quick_response awscc_wisdom_quick_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_quick_response#id DataAwsccWisdomQuickResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccWisdomQuickResponse resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccWisdomQuickResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccWisdomQuickResponse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccWisdomQuickResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWisdomQuickResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.channels">channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference">DataAwsccWisdomQuickResponseContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference">DataAwsccWisdomQuickResponseContentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.groupingConfiguration">grouping_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference">DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.isActive">is_active</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.knowledgeBaseArn">knowledge_base_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseArn">quick_response_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseId">quick_response_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.shortcutKey">shortcut_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList">DataAwsccWisdomQuickResponseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.channels"></a>

```python
channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.content"></a>

```python
content: DataAwsccWisdomQuickResponseContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference">DataAwsccWisdomQuickResponseContentOutputReference</a>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contents"></a>

```python
contents: DataAwsccWisdomQuickResponseContentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference">DataAwsccWisdomQuickResponseContentsOutputReference</a>

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `grouping_configuration`<sup>Required</sup> <a name="grouping_configuration" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.groupingConfiguration"></a>

```python
grouping_configuration: DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference">DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference</a>

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `knowledge_base_arn`<sup>Required</sup> <a name="knowledge_base_arn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.knowledgeBaseArn"></a>

```python
knowledge_base_arn: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quick_response_arn`<sup>Required</sup> <a name="quick_response_arn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseArn"></a>

```python
quick_response_arn: str
```

- *Type:* str

---

##### `quick_response_id`<sup>Required</sup> <a name="quick_response_id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.quickResponseId"></a>

```python
quick_response_id: str
```

- *Type:* str

---

##### `shortcut_key`<sup>Required</sup> <a name="shortcut_key" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.shortcutKey"></a>

```python
shortcut_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tags"></a>

```python
tags: DataAwsccWisdomQuickResponseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList">DataAwsccWisdomQuickResponseTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWisdomQuickResponseConfig <a name="DataAwsccWisdomQuickResponseConfig" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wisdom_quick_response#id DataAwsccWisdomQuickResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWisdomQuickResponseContent <a name="DataAwsccWisdomQuickResponseContent" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent()
```


### DataAwsccWisdomQuickResponseContents <a name="DataAwsccWisdomQuickResponseContents" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents()
```


### DataAwsccWisdomQuickResponseContentsMarkdown <a name="DataAwsccWisdomQuickResponseContentsMarkdown" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown()
```


### DataAwsccWisdomQuickResponseContentsPlainText <a name="DataAwsccWisdomQuickResponseContentsPlainText" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText()
```


### DataAwsccWisdomQuickResponseGroupingConfiguration <a name="DataAwsccWisdomQuickResponseGroupingConfiguration" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration()
```


### DataAwsccWisdomQuickResponseTags <a name="DataAwsccWisdomQuickResponseTags" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWisdomQuickResponseContentOutputReference <a name="DataAwsccWisdomQuickResponseContentOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent">DataAwsccWisdomQuickResponseContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContent">DataAwsccWisdomQuickResponseContent</a>

---


### DataAwsccWisdomQuickResponseContentsMarkdownOutputReference <a name="DataAwsccWisdomQuickResponseContentsMarkdownOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown">DataAwsccWisdomQuickResponseContentsMarkdown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseContentsMarkdown
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdown">DataAwsccWisdomQuickResponseContentsMarkdown</a>

---


### DataAwsccWisdomQuickResponseContentsOutputReference <a name="DataAwsccWisdomQuickResponseContentsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.markdown">markdown</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference">DataAwsccWisdomQuickResponseContentsMarkdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.plainText">plain_text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference">DataAwsccWisdomQuickResponseContentsPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents">DataAwsccWisdomQuickResponseContents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `markdown`<sup>Required</sup> <a name="markdown" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.markdown"></a>

```python
markdown: DataAwsccWisdomQuickResponseContentsMarkdownOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsMarkdownOutputReference">DataAwsccWisdomQuickResponseContentsMarkdownOutputReference</a>

---

##### `plain_text`<sup>Required</sup> <a name="plain_text" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.plainText"></a>

```python
plain_text: DataAwsccWisdomQuickResponseContentsPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference">DataAwsccWisdomQuickResponseContentsPlainTextOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseContents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContents">DataAwsccWisdomQuickResponseContents</a>

---


### DataAwsccWisdomQuickResponseContentsPlainTextOutputReference <a name="DataAwsccWisdomQuickResponseContentsPlainTextOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText">DataAwsccWisdomQuickResponseContentsPlainText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainTextOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseContentsPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseContentsPlainText">DataAwsccWisdomQuickResponseContentsPlainText</a>

---


### DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference <a name="DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration">DataAwsccWisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.criteria"></a>

```python
criteria: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseGroupingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseGroupingConfiguration">DataAwsccWisdomQuickResponseGroupingConfiguration</a>

---


### DataAwsccWisdomQuickResponseTagsList <a name="DataAwsccWisdomQuickResponseTagsList" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccWisdomQuickResponseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccWisdomQuickResponseTagsOutputReference <a name="DataAwsccWisdomQuickResponseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_wisdom_quick_response

dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags">DataAwsccWisdomQuickResponseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccWisdomQuickResponseTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWisdomQuickResponse.DataAwsccWisdomQuickResponseTags">DataAwsccWisdomQuickResponseTags</a>

---



